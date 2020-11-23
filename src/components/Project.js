import styled from 'styled-components';
import Card from './Card';
import {ProjectData} from '../data/ProjectData';



function Project(){
	return(
		<StyledProject id="projects">
			<h2>Projects</h2>
			<StyledSection>
				{ProjectData.map((data) => (
						<Card data={data} id={data.id} key={data.id}/>
				))}
			</StyledSection>
		</StyledProject>
	);
}

const StyledProject = styled.div`
	min-height: 100vh;
	margin: auto;
	width: 60%;	
	h2{
		text-align: center;
		font-family: 'Raleway', sansserif;
		font-size: 3rem;
		margin-bottom: 4rem;
		color: #374785;
	}
`

const StyledSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
`

export default Project;