import styled from 'styled-components';
import headingBG from '../img/headingBG.svg';
import {motion} from 'framer-motion';
import {fadeUp} from '../animation';
import {Hide} from '../style';

function Header(){

	return(
		<>
			<StyledHeader id="home">
				<Hide>
					<motion.h1 variants={fadeUp} initial='hidden' animate='show'>Joon Kang</motion.h1>
				</Hide>
				<Hide>	
					<motion.h2  variants={fadeUp} initial='hidden' animate='show'>Front End Developer</motion.h2>
				</Hide>
			</StyledHeader>
		</>
	);
}

const StyledHeader = styled(motion.div)`
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
	@media(max-width: 1024px){
		width: 100%;
	}
	@media(max-width: 320px){
		h2{
			text-align: center;
		}
	}
`

export default Header;