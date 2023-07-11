import { ArticleSmallStyle } from './wrappers/ArticleSmallStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faTrashCan, faFilePen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { AppStateType } from '../reducers/index'
import { useDispatch } from 'react-redux'
import { throwErrorAction } from '../actions/errorAction'
import { queryArticlesAction } from '../actions/articlesAction'
import Modal from '@mui/material/Modal'
import { DeleteModal } from './wrappers/DeleteModal'

interface IArticleSmallState {
	content: string
	guid: string
}

export const ArticleSmall = ({ content, guid }: IArticleSmallState) => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const [isEditable, setEditable] = useState(false)
	const [inputContent, setInputContent] = useState(content)
	const [openModal, setOpenModal] = useState(false)
	const articleIcon = <FontAwesomeIcon icon={faFeed} />
	const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
	const editIcon = <FontAwesomeIcon icon={faFilePen} />

	const handleChangeSubmit = async (newContent: string) => {
		const url = '/api/v1/feed/update-article'
		setEditable(!isEditable)
		const body = {
			guid,
			newTextContent: newContent,
		}
		const options = {
			withCredentials: true,
			headers: { 'Content-Type': 'application/json' },
		}
		try {
			const { data } = await axios.patch(url, body, options)
			if (data.newArticle) {
				dispatch(queryArticlesAction({ limit: 40 }))
			}
		} catch (e: any) {
			dispatch(throwErrorAction(e.message))
		}
	}

	const handleRemoveSubmit = async () => {
		handleClose()
		const url = '/api/v1/feed/remove-article'
		const options = {
			withCredentials: true,
			headers: { 'Content-Type': 'application/json' },
			params: {
				guid,
			},
		}
		try {
			const { data } = await axios.delete(url, options)
			console.log(data)
			if (data.deletedCount) {
				dispatch(queryArticlesAction({ limit: 40 }))
			}
		} catch (e: any) {
			dispatch(throwErrorAction(e.message))
		}
	}

	const handleInputBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
		handleChangeSubmit(e.target.value)
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		const { value } = e.target as HTMLTextAreaElement
		if (value === 'Enter') {
			handleChangeSubmit(value)
		}
	}

	const handleDefaultValue = (e: React.FocusEvent<HTMLTextAreaElement>) => {
		setInputContent(e.target.value)
	}

	const handleOpen = () => {
		setOpenModal(!openModal)
	}

	const handleClose = () => {
		setOpenModal(false)
	}

	return (
		<ArticleSmallStyle key={guid}>
			<div className="feed-icon">{articleIcon}</div>
			{isEditable ? (
				<textarea
					value={inputContent}
					onChange={handleDefaultValue}
					autoFocus={true}
					onBlur={handleInputBlur}
					onKeyPress={handleKeyPress}
					className="article-content"
				/>
			) : (
				<div className="article-content">
					<p>{content}</p>
				</div>
			)}
			<div className="article-icons">
				<button className="delete-button" onClick={handleOpen}>
					{trashIcon}
				</button>
				<button className="update-button" onClick={() => setEditable(!isEditable)}>
					{editIcon}
				</button>
			</div>
			{openModal && (
				<Modal
					open={openModal}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<DeleteModal>
						<h3>Видалити дану публікацію?</h3>
						<span></span>
						<div>
							<button onClick={handleRemoveSubmit} className="simple-button inverse">
								Так
							</button>
							<button onClick={handleOpen} className="simple-button inverse">
								Ні
							</button>
						</div>
					</DeleteModal>
				</Modal>
			)}
		</ArticleSmallStyle>
	)
}
