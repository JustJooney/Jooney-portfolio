import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import {fadeUp, fadeRight, fadeLeft} from '../animation';



function Nav(){


	const [navStatus, setNavStatus] = useState(false);
	const history = useHistory();


	function navHandler(){
		history.push('/');
		setNavStatus((navState) => !navState);
	}

	return(
		<>
			<FixedNav variants={fadeRight}>
				<StyledIcon>
					<FontAwesomeIcon icon={faBars} size='2x' onClick={navHandler}/>	
				</StyledIcon>		
				<div className={`navbar ${navStatus ? "active-navbar" : ""}`}>
						<h2><a href="#home" onClick={navHandler}>Home</a></h2>
						<h2><a href="#about" onClick={navHandler}>About</a></h2>
						<h2><a href="#skills" onClick={navHandler}>Skills</a></h2>
						<h2><a href="#projects" onClick={navHandler}>Projects</a></h2>
						<SubNav>
							<a href="https://github.com/JustJooney" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
							<a href='https://www.linkedin.com/in/joon-kang-7563351ab/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
							<a href='https://twitter.com/JooneyBeeJones' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
							<a href='https://www.youtube.com/channel/UCzTMNQugFdceApEdMbKaG0w?view_as=subscriber' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size='2x'/></a>
						</SubNav>
				</div>
			</FixedNav>
			<NavTitle variants={fadeLeft}>
				<a href="https://github.com/JustJooney" target="_blank" rel="noreferrer"><FontAwesomeIcon className='spacing' icon={faGithub} size='2x'/></a>
				<a href='https://www.linkedin.com/in/joon-kang-7563351ab/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='spacing' icon={faLinkedin} size='2x'/></a>
				<a href='https://twitter.com/JooneyBeeJones' target="_blank" rel="noreferrer"><FontAwesomeIcon className='spacing' icon={faTwitter} size='2x'/></a>
				<a href='https://www.youtube.com/channel/UCzTMNQugFdceApEdMbKaG0w?view_as=subscriber' target="_blank" rel="noreferrer"><FontAwesomeIcon className='spacing' icon={faYoutube} size='2x'/></a>
			</NavTitle>
		</>
	)
}

const FixedNav = styled(motion.div)`
	.navbar{
		position: fixed;
		width: 20rem;
		height: 100vh;
		background-color: #374785;
		z-index: 5;
		padding: 5rem 0rem 20rem 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		transform: translateX(-100%);
		transition: all 0.5s ease;
		@media(max-width: 425px){
			width: 100%;
		}
		h2{
			font-family: "Raleway" , sans-serif;
			font-size: 1.4rem;
			margin-bottom: 2rem;
			a{
				text-decoration: none;
				color: white;
				&:hover{
					color: #f76d6d;
					scroll-behavior: smooth;
				}
			}
		}
	}
	.active-navbar{
		transform: translateX(0);
	}
`

const SubNav = styled.div`
	display: none;
	@media(max-width: 768px){
		display: block;
	}
	a{
		margin-right: 1.3rem;
		color: white;
		&:hover{
			color: #f76d6d;
		}
	}
`

const StyledIcon = styled.div`
	position: fixed;
	width: 4rem;
	height: 4rem;
	margin: 1rem;
	z-index: 10;
	border-radius: 50%;
	line-height: 4.5rem;
	text-align: center;
	background: white;
	color: #f76d6d;
	cursor: pointer;
	&:hover{
		color: white;
		background: #f76d6d;
	}

`

const NavTitle = styled(motion.div)`
	position: fixed;
	top: 2.5rem;
	right: 2.5rem;
	z-index: 10;
	font-family: "Raleway", sans-serif;
	display: flex;
	flex-direction: column;
	a{
		color: white;
		&:hover{
			color: #f76d6d;
		}
	}
	.spacing{
		margin-bottom: 1.5rem;
	}
	@media(max-width: 768px){
		display: none;
	}
`



export default Nav;