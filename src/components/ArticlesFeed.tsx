import { ArticlesFeedStyle } from './wrappers/ArticlesFeedStyle'
import { Article } from './Article'
import { useSelector } from 'react-redux'
import { AppStateType } from '../reducers/index'
import { LoadingGifSmall } from './LoadingIcon'
import { IarticleState } from '../reducers/articlesReducer'

export const ArticlesFeed = () => {
	const { isLoading, articles }: IarticleState = useSelector(
		(state: AppStateType) => state.articles,
	)

	return (
		<ArticlesFeedStyle>
			{isLoading ? (
				<div className="loading-gif">
					<LoadingGifSmall color="#333" />
				</div>
			) : (
				<>
					<div className="articles-section">
						{articles.map((article) => {
							return (
								<Article
									key={article.guid}
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
							)
						})}
					</div>
				</>
			)}
		</ArticlesFeedStyle>
	)
}
