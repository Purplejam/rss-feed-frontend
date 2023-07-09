import {ArticlesFeedStyle} from './wrappers/ArticlesFeedStyle'
import {Article} from './Article'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../reducers/index'
import {ThunkDispatch} from 'redux-thunk'
import {Action} from 'redux'
import {LoadingGifSmall} from './LoadingIcon'
import {IArticle} from '../components/interfaces/Article.interface'
import {IarticleState} from '../reducers/articlesReducer'
import {FeedPagination} from './Pagination'

export const ArticlesFeed = () => {
	const {totalArticles, isLoading, articles}: IarticleState = useSelector((state: AppStateType) => state.articles)

	return(
		<ArticlesFeedStyle>
		{isLoading 
		? <div className="loading-gif"><LoadingGifSmall color="#333"/></div> 
		:<>
			<div className="articles-section">
			{articles.map((article) => {
				return <Article
				title={article.title}
				link={article.link}
				pubDate={article.pubDate}
				enclosure={article.enclosure}
				content={article.content}
				contentSnippet={article.contentSnippet}
				guid={article.guid}
				categories={article.categories}
				isoDate={article.isoDate}
				/>
			})}			
			</div>
			</>}
		</ArticlesFeedStyle>
		)
}