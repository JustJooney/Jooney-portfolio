import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import CardDetail from './CardDetail';
import {motion} from 'framer-motion';
import {fadeUp} from '../animation';
import {Hide} from '../style';

function Card({data, id}){

	const [isClick, setIsClick] = useState(true);

	function loadProjectDetail(){
		document.body.style.overflow = 'hidden';
		setIsClick(!isClick);
	}


	return(
		<>
			<Link to={`/project/${id}`}>
				<Hide>
					<StyledCard  variants={fadeUp} onClick={loadProjectDetail}>
						<motion.img src={data.img} alt={data.name} />
					</StyledCard>
				</Hide>
			</Link>
			<CardDetail data={data} isClick={isClick} setIsClick={setIsClick} />
		</>
	)
}

const StyledCard = styled(motion.div)`
	position: relative;
	margin: 1rem 1rem;
	width: 20rem;
	height: 20rem;
	border: 2px solid #374785;
	cursor: pointer;
	filter: brightness(36%);
	transition: 500ms;
	&:hover{
		filter: brightness(100%);
	}
	img{
		width: 100%;
		height: 100%;
		object-fit: cover;	
	}
	@media(max-width: 768px){
		filter: brightness(100%);
	}
`


export default Card;