import styled from 'styled-components';
import skillBG from '../img/skillBG.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt, faLaptopCode, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';

function Skills(){
	return(
		<StyledSkills id="skills">
			<h2>Skills</h2>
			<div>
				<section>
					<FontAwesomeIcon className='icon' icon={faLaptopCode} size="5x"/>
					<div/>
					<p>Html, CSS, and <br/>Javascript</p>
				</section>
				<section>
					<FontAwesomeIcon className='icon' icon={faMobileAlt} size="5x"/>
					<div/>
					<p>Creating Responsive Websites</p>
				</section>
				<section>
					<FontAwesomeIcon className='icon' icon={faReact} size="5x"/>
					<div/>
					<p>Expertise with React and Redux</p>
				</section>
				<section>
					<FontAwesomeIcon className='icon' icon={faUserFriends} size="5x"/>
					<div/>
					<p>Comfortable working with a Team</p>
				</section>
			</div>
		</StyledSkills>
	)
}

const StyledSkills = styled.div`
	height: 100vh;
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
	div{
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
			.icon{
				margin-bottom: 1rem;
			}
			div{
				width: 50%;
				margin: auto;
				height: 0.3rem;
				background-color: #f76d6d;
				margin-bottom: 1rem;
			}
			p{	
				text-align: center;
				font-size: 1.3rem;
			}

		}
	}

`


export default Skills;