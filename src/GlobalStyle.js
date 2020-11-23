import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	html{
		scroll-behavior: smooth;
	}
	body{
		width: 100%;
		font-family: 'Roboto Slab', serif;
		background-color: #a8d1e7;
		color: white;
		cursor: default;
	}
`

export default GlobalStyle;