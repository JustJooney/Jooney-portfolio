import styled from 'styled-components';
import skillBG from '../img/skillBG.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt, faLaptopCode, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion';
import {fadeUp, pageAnim} from '../animation';
import {Hide} from '../style';
import {useScroll} from './useScroll';


function Skills(){

	const [elements3, controls3] = useScroll();

	return(
		<StyledSkills id="skills" variants={pageAnim} ref={elements3} initial={controls3} animate={controls3}>
			<Hide>
				<motion.h2 variants={fadeUp}>Skills</motion.h2>
			</Hide>
			<Hide className='section'>
				<motion.section variants={fadeUp}>
					<FontAwesomeIcon className='icon' id='laptop' icon={faLaptopCode} size="5x"/>
					<div/>
					<p>Html, CSS, and <br/>Javascript</p>
				</motion.section>
				<motion.section variants={fadeUp}>
					<FontAwesomeIcon className='icon' id='mobile' icon={faMobileAlt} size="5x"/>
					<div/>
					<p>Creating Responsive Websites</p>
				</motion.section>
				<motion.section variants={fadeUp}>
					<FontAwesomeIcon className='icon' id='react' icon={faReact} size="5x"/>
					<div/>
					<p>Expertise with React and Redux</p>
				</motion.section>
				<motion.section variants={fadeUp}>
					<FontAwesomeIcon className='icon' id='friend' icon={faUserFriends} size="5x"/>
					<div/>
					<p>Thrives in a team enviroment</p>
				</motion.section>
			</Hide>
		</StyledSkills>
	)
}


const StyledSkills = styled(motion.div)`
	min-height: 100vh;
	background-image: url(${skillBG});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2{
		margin-top: 3rem;
		font-family: 'Raleway', sansserif;
		font-size: 3rem;
		margin-bottom: 2rem;
	}
	@media(max-width: 425px){
		background-color: #374785;
		background-image: none;
		.section{
			flex-direction: column;
			justify-content: center;
			section{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
	}
	.section{
		width: 80%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		section{
			margin-top: 2rem;
			width: 20%;
			height: 20rem;
			padding: 1rem;
			text-align: center;

			#laptop{
					@keyframes bounce{
					from{
						transform: translateY(-10%);
					}
					to {
						transform: translateY(0);
					}
				}
				&:hover{
					animation-duration: 0.5s;
					animation-name: bounce;
					animation-iteration-count: infinite;
					animation-direction: alternate;
				}
			}
			#mobile{
				@keyframes shake{
					from{
						transform: rotate(0deg);
					}
					50%{
						transform: rotate(10deg);
					}
					to{
						transform: rotate(-10deg);
					}
				}
				&:hover{
					animation-duration: 0.2s;
					animation-name: shake;
					animation-iteration-count: infinite;
					animation-direction: alternate;					
				}
			}
			#react{
				@keyframes spin{
					from{
						transform: rotate(0deg);
					}
					to{
						transform: rotate(360deg);
					}
				}
				&:hover{
					animation-duration: 2s;
					animation-name: spin;
					animation-iteration-count: infinite;
					animation-direction: normal;					
				}
			}
			#friend{
				@keyframes move{
					from{
						transform: translateX(10%);
					}
					to{
						transform: translateX(-10%);
					}
				}
				&:hover{
					animation-duration: 1s;
					animation-name: move;
					animation-iteration-count: infinite;
					animation-direction: alternate;					
				}
			}
			div{
				width: 50%;
				height: 0.3rem;
				background-color: #f76d6d;
				margin: 1rem auto;
				@media(max-width: 425px){
					margin: 1rem;
					width: 100%;
				}
			}
			p{	
				text-align: center;
				font-size: 1.3rem;
				transition: 250ms;
				&:hover{
					color: #f76d6d;
				}
			}

		}
	}

`


export default Skills;