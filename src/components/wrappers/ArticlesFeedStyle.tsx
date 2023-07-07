import styled from 'styled-components'

export const ArticlesFeedStyle = styled.div`
	
	h4 {
		opacity: .6;
		text-align: center;
		padding: 1rem 0;
	}

	.loading-gif {
		font-size: 2rem;
	}

	.articles-section {
		padding-top: 1.5rem;
		padding-bottom: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 1.5rem;
		grid-auto-rows: 1fr;
		
		@media (max-width: 415px) {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			padding-top: 0;
		}
	}
`