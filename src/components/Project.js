import styled from 'styled-components';
import Card from './Card';
import {ProjectData} from '../data/ProjectData';
import {Hide} from '../style';
import {motion} from 'framer-motion';
import {fadeUp, pageAnim} from '../animation';
import {useScroll} from './useScroll';


function Project(){

	const [elements4, controls4] = useScroll();

	return(
		<StyledProject id="projects" variants={pageAnim}  ref={elements4} initial={controls4} animate={controls4}>
			<Hide>
				<motion.h2 variants={fadeUp}>Projects</motion.h2>
			</Hide>
			<StyledSection >
				{ProjectData.map((data) => (
						<Card data={data} id={data.id} key={data.id}/>
				))}
			</StyledSection>
		</StyledProject>
	);
}

const StyledProject = styled(motion.div)`
	min-height: 100vh;
	margin: auto;
	width: 80%;	
	h2{
		text-align: center;
		font-family: 'Raleway', sansserif;
		font-size: 3rem;
		margin-bottom: 4rem;
		color: #374785;
	}
	@media(max-width: 1024px){
		width: 70%;
	}
	@media(max-width: 768px){
		text-align: center;
		width: 100%;
	}
`

const StyledSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`

export default Project;