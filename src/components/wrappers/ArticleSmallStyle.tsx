import styled from 'styled-components'

export const ArticleSmallStyle = styled.div`
	display: flex;
	justify-content: start;
	flex-direction: row;
	align-items: center;
	padding: 1rem 1rem;
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
	border-radius: 0.1rem;
	margin-bottom: 0.5rem;

	.feed-icon {
		padding: 0 1rem;
		svg {
			opacity: 0.6;
		}
	}

	.article-content {
		width: 90%;
		p {
			text-align: left;
		}
	}

	.article-icons {
		display: flex;
		flex-direction: row;
		margin-left: auto;
		svg {
			margin-left: 1rem;
		}
	}

	button {
		background-color: transparent;
		border-width: 0;
		font-family: inherit;
		font-size: inherit;
		font-style: inherit;
		font-weight: inherit;
		line-height: inherit;
		padding: 0;
		cursor: pointer;
	}

	.delete-button {
		opacity: 0.8;
		color: #ef4f4f;
	}

	.update-button {
		opacity: 0.8;
		color: #4855ab;
	}

	textarea {
		padding: 5px 5px;
		box-sizing: border-box;
		border: 2px solid #ccc;
		border-radius: 4px;
		resize: none;
		font-family: 'Montserrat', sans-serif;
	}
`
