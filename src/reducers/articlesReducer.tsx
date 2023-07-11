import { IArticle } from '../components/interfaces/Article.interface'

export interface IarticleState {
	articles: IArticle[]
	isLoading: boolean
	totalArticles: number
}

const initialState: IarticleState = {
	articles: [
		{
			title: '',
			link: '',
			pubDate: '',
			enclosure: {
				url: '',
			},
			content: '',
			contentSnippet: '',
			guid: '',
			categories: '',
			isoDate: '',
		},
	],
	totalArticles: 0,
	isLoading: true,
}

const articlesReducer = (
	state: IarticleState = initialState,
	action: { type: string; payload: { articles: IArticle[]; totalArticles: number } },
) => {
	switch (action.type) {
		case 'RESET_ARTICLES': {
			return {
				...initialState,
			}
		}
		case 'FETCHING_ARTICLES': {
			return {
				...state,
				isLoading: true,
			}
		}
		case 'FETCH_CURRENT_ARTICLES': {
			return {
				articles: action.payload.articles,
				totalArticles: action.payload.totalArticles,
				isLoading: false,
			}
		}
		default:
			return {
				...state,
			}
	}
}

export default articlesReducer
