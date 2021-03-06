import styled from 'styled-components';
import { useState } from 'react';
import joon1 from '../img/joon1.JPG';
import joon2 from '../img/joon2.JPG';
import {motion} from 'framer-motion';
import {fadeUp, imgAnim, pageAnim} from '../animation';
import {Hide} from '../style';
import {useScroll} from './useScroll';

function About(){

	const [element2, controls2] = useScroll();

	const [imgState, setImgState] = useState(joon1);

	function imgEnterChange(){
		setImgState(joon2);
	}

	function imgLeaveChange(){
		setImgState(joon1);
	}

	return(
		<StyledAbout id='about' variants={pageAnim} ref={element2} initial={controls2} animate={controls2}>
			<Hide>
				<motion.h1 variants={fadeUp}><span>Little</span> About Myself</motion.h1>
			</Hide>
			<div className='aboutsection'>
					<motion.img variants={imgAnim} src={imgState} alt='joon' onMouseEnter={imgEnterChange} onMouseLeave={imgLeaveChange}/>
				<div className='paragraph'>
					<Hide>
						<motion.p variants={fadeUp} id='intro'>I’m a front-end developer from a small town in Washington.</motion.p>
					</Hide>
					<Hide>
						<motion.p variants={fadeUp}  id='description'>I like spending way too much time on the computer. I enjoy creating websites ranging from simple landing pages to complex API sites. I love using React just the way you can re-use components to create these dynamic websites. The bottom line is, I enjoy programming very much, even though it does get very frustrating sometimes. Still, when I finally finish a project or fix a bug, it’s such a fantastic feeling to have accomplished something.</motion.p>
					</Hide>
					<Hide>
						<motion.p variants={fadeUp}  id='outro'>In my free time, you can catch me playing video games or creating videos on youtube.</motion.p>
					</Hide>
				</div>
			</div>
		</StyledAbout>
	);
}

const StyledAbout = styled(motion.div)`
	min-height: 80vh;
	margin: auto;
	width: 80%;
	h1{
		font-size: 3rem;
		margin-bottom: 3rem;
		text-align: center;
		margin-top: 5rem;
		font-family: "Raleway", sanserif;
		color: #374785;
		span{
			font-size: 2rem;
			color: #f76d6d;
		}
	}
	.aboutsection{
		display: flex;
		justify-content: space-around;
		align-items: center;
		img{
			width: 30%;
			object-fit: cover;
			filter: grayscale(100%);
			border-radius: 1rem;
		}
		.paragraph{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			width: 50%;
			p{
				margin: 1rem;
				transition: 500ms;
				&:hover{
					color: #374785;
				}
			}
			#intro{
				font-size: 2rem;
			}
			#description, #outro{ 
				font-size: 1.3rem;
			}
		}
		@media(max-width: 1024px){
			img{
				width: 40%;
			}
		}
		@media(max-width: 768px){
			img{
				display: none;
			}
			.paragraph{
				width: 90%;
			}
		}
		@media(max-width: 425px){
			width: 100%;
			text-align: center;
		}
	}
`

export default About;