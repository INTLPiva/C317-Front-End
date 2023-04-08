import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
			margin: 0;
			padding: 0;
			outline: 0;
			box-sizing: border-box;
			font-family: 'Roboto', sans-serif;
	}

	body {
		height: 100%;
		background-color: #f5f8fb;
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}
	
	a {
		text-decoration: none
	}
`;
