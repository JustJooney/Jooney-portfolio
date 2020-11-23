import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import CardDetail from './CardDetail';

function Card({data, id}){

	const [isClick, setIsClick] = useState(true);

	function loadProjectDetail(){
		document.body.style.overflow = 'hidden';
		setIsClick(!isClick);
	}


	return(
		<>
			<Link to={`/project/${id}`}>
				<StyledCard onClick={loadProjectDetail}>
					<img src={data.img} alt={data.name} />
				</StyledCard>
			</Link>
			<CardDetail data={data} isClick={isClick} setIsClick={setIsClick} />
		</>
	)
}

const StyledCard = styled.div`
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
`


export default Card;