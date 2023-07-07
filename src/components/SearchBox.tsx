import {useState, useEffect} from 'react'
import {SearchBoxStyles} from './wrappers/SearchBoxStyles'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import {queryArticlesAction} from '../actions/articlesAction'
import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {AppStateType} from '../reducers/index'
import {useDispatch, useSelector} from 'react-redux'
import {queryObjectAction} from '../actions/queryAction'


export const SearchBox = () => {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
	const [bodyRequest, setBody] = useState<object>({page: 1})

	const optionsCategories = ['Усі', 'Україна', 'Бізнес', 'Техно', 'Новації', 'Life', 'Спорт', 'Світ']
	const [category, setCatefory] = useState<string | null>('')

	const optionsSorting = ['Спочатку нові', 'Спочатку старі']
	const [sorting, setSorting] = useState<string | null>('')

	const [searchQuery, setQuery] = useState<string | null>('')

	const inputHandler = (body: any) => {
   dispatch(queryObjectAction(body))
	}

	useEffect(() => {
		if (Object.keys(bodyRequest).length !== 0) {
			inputHandler(bodyRequest)
		}
	}, [bodyRequest])


	return(
		<SearchBoxStyles>
			<FormControl fullWidth size="small" className="grid-select">
			 <InputLabel id="select-technique">Категорія</InputLabel>
			 <Select
			 		className="custom-input"
			   labelId="select-technique"
			   id="demo-simple-select"
			   value={category}
			   label="Technique"
			   onChange={(event: any) => {
			   	setCatefory(event.target.value)
			   	setBody({...bodyRequest,	category: event.target.value})
			   }}
			 >
				 {optionsCategories.map(item => {
				 	return <MenuItem key={`${item}`} value={item}>{`${item}`}</MenuItem>
				 })}		 		
			 </Select>
			</FormControl>

			<FormControl fullWidth size="small" className="grid-select">
			 <InputLabel id="select-sorting">Сортувати</InputLabel>
			 <Select
			 		className="custom-input"
			   labelId="select-sorting"
			   id="demo-simple-select"
			   value={sorting}
			   label="Сортувати"
			   onChange={(event: any) => {
			   	setSorting(event.target.value)
			   	setBody({...bodyRequest,	sorting: event.target.value})
			   }}
			 >
			 	{optionsSorting.map(item => {
				 	return <MenuItem key={`${item}`} value={item}>{`${item}`}</MenuItem>
				 })}		
			 </Select>
			</FormControl>

		 <TextField
		 		size="small"
		 		className="custom-input"
		   label="Пошук Новин"
		   id="demo-simple-select"
		   value={searchQuery}
		   onChange={(event: any) => {
		   	setQuery(event.target.value)
		   	setBody({...bodyRequest,	searchQuery: event.target.value})
		   }}
		 >  
		 </TextField>

		</SearchBoxStyles>
		)
}