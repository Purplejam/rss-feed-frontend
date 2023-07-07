import {ArticleStyle} from './wrappers/ArticleStyle'
import {IArticle} from '../components/interfaces/Article.interface'

export const Article = ({title, link, pubDate, enclosure, content, contentSnippet, guid, categories, isoDate}: IArticle) => {
	
	const getDateFromIso = (isoString: string) => {
		let date = new Date(isoString)
		return date.toLocaleString('en-US')
	}
	return(
		<ArticleStyle>
			<h4>{title}</h4>
			<img src={enclosure.url} alt={categories}/>
			<p className="article-category"><i>Категорія: {categories}</i></p>
			<p className="article-content">{contentSnippet}</p>
			<p className="article-date"><i>Час публікації: {getDateFromIso(isoDate)}</i></p>
			<a href={`${guid}`} target="_blank" rel="noopener noreferrer"><button className="main-button">Читати публікацію</button></a>
		</ArticleStyle>
		)
}