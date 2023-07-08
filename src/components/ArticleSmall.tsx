import {ArticleSmallStyle} from './wrappers/ArticleSmallStyle'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFeed, faTrashCan, faFilePen} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
import { TextareaAutosize } from '@mui/base'


interface IArticleSmallState {
	content: string
}

export const ArticleSmall = ({content}: IArticleSmallState) => {
	const [isEditable, setEditable] = useState(false)
	const articleIcon = <FontAwesomeIcon icon={faFeed} />
	const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
	const editIcon = <FontAwesomeIcon icon={faFilePen} />

 const handleInputBlur = () => {
  setEditable(!isEditable)
	}

	const handleKeyPress = (e: any) => {
  if (e.key === 'Enter') {
			setEditable(!isEditable)
		}
	}


	return(
		<ArticleSmallStyle>
			<div className="feed-icon">{articleIcon}</div>
			{isEditable 
			?<textarea autoFocus={true} onBlur={handleInputBlur} onKeyPress={handleKeyPress} className="article-content">{content}</textarea>
			:<div className="article-content">
				<p>{content}</p>
			</div>
			}
			<div className="article-icons">
				<button className="delete-button">{trashIcon}</button>
				<button className="update-button" onClick={() => setEditable(!isEditable)}>{editIcon}</button>
			</div>
			
		</ArticleSmallStyle>
		)
}