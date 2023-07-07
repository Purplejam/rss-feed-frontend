import styled from 'styled-components'

export const ArticleStyle = styled.div`
	height: 100%;
	position: relative;
	padding: 2rem 2rem 5rem 2rem;
	border: 2px solid #f1f3f4;
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
	border-radius: .1rem;
	overflow: hidden;
	transition: all 200ms ease-in;
	&:hover {
		box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
	}
	img {
		height: 40vh;
		width: 100%;
		object-fit: cover;
		object-position: left top;
	}
	h3 {
		padding: 0;
		opacity: .8;	
	} 
	h4 {
		min-height: 5rem;
		font-size: .9rem;
	}
	.article-category, p.article-date {
		font-size: .8rem; 
		opacity: .6; 
	}
	p.article-content {
		opacity: .8;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	button {
		border-radius: 0;
		position: absolute;
	 bottom: 1.5rem;
	 left: 0;
	 transform: translateX(2rem);
	}
`