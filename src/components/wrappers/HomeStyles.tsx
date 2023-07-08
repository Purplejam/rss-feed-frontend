import styled from 'styled-components'

export const HomeStyles = styled.section`
	h2 {
		text-align: center;
		margin-top: 1rem;
		&:after {
			opacity: .6;
			margin-top: .5rem;
			margin-left: auto;
			margin-right: auto;
			content: '';
			display: block;
			width: 2rem;
			height: 3px;
			background-color: #EF4F4F;
		}
	}
	.total-items-count {
		text-align: center;
		opacity: .6;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.article-image-description {
		display: flex; 
		justify-content: space-between;
	}

`

