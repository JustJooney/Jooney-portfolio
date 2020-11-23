import styled from 'styled-components';
import headingBG from '../img/headingBG.svg';

function Header(){
	return(
		<>
			<StyledHeader id="home">
				<h1>Joon Kang</h1>
				<h2>Front End Developer</h2>
			</StyledHeader>
		</>
	);
}



const StyledHeader = styled.div`
	background-image: url(${headingBG});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 70%;
	min-height: 100vh;
	font-family: 'Raleway', sans-serif;
	font-size: 1.5rem;
	position: relative;
	h1{
		color: #f76d6d;
	}
	
`

export default Header;