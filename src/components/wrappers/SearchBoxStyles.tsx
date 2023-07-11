import styled from 'styled-components'

export const SearchBoxStyles = styled.div`
	display: grid;
	grid-gap: 1rem;
	font-family: 'Montserrat', sans-serif;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

	.custom-input {
		width: 100%;
		background-color: #fafafa;
		color: #696969;
	}

	@media (max-width: 768px) {
		.custom-input {
			font-size: 0.8rem;
		}

		fieldset legend span {
			padding-right: 15px;
		}

		label[data-shrink='false'] {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 415px) {
		padding-bottom: 2rem;
		padding-top: 0.7rem;

		.custom-input {
			font-size: 0.8rem;
		}

		label[data-shrink='false'] {
			font-size: 0.8rem;
		}
	}
`
