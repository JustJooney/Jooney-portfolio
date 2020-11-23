import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

function CardDetail({data, isClick, setIsClick}){

	const history = useHistory();

	function exitDetailHandler(e){
		const element = e.target;
		if(element.classList.contains('shadow')){
			document.body.style.overflow = 'auto';
			history.push('/');
			setIsClick(!isClick);
		}
	}


	return(
		<>
			{!isClick && 
				<StyledCardDetail className='shadow' onClick={exitDetailHandler}>
					<Detail>
						<DetailNav>
							<h1>{data.name}</h1>
							<ul>
								<li><a href={data.url} rel='website' target="_blank" rel="noreferrer">Website</a></li>
								<li><a href={data.gitHub} rel='github' target="_blank" rel="noreferrer">Github</a></li>
							</ul>
						</DetailNav>
						<Code>{data.code.map((code) => <span key={code}>{code}</span>)}</Code>
						<DetailDescription>
							<a href={data.url} target="_blank" rel="noreferrer"><img src={data.gif}  alt={data.name} /></a>
							<div>
								<section>
									<h3>Objective</h3>
									<p>{data.objective}</p>	
								</section>
								<section>
									<h3>Problem</h3>
									<p>{data.problems}</p>	
								</section>
								<section>
									<h3>Solution</h3>
									<p>{data.solutions}</p>	
								</section>
								<section>
									<h3>Summary</h3>
									<p>{data.summary}</p>
								</section>
							</div>					
						</DetailDescription>
					</Detail>
				</StyledCardDetail>
			}
		</>
	)
}

const StyledCardDetail = styled.div`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;

`

const Detail = styled.div`
	width: 80%;
	height: 80%;
	z-index: 10;
	position: fixed;
	background: #374785;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`

const DetailNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 2rem;
	h1{
		font-size: 3rem;
		padding: 1rem 1rem;
		font-family: "Raleway", sanserif;
	}
	ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		li{
			margin-left: 5rem;
			list-style: none;
			padding: 1rem;
			background: white;
			border-radius: 2rem;
			background-color:#a8d1e7;
			transition: 500ms;
			&:hover{
				background-color: #f76d6d;
				a{
					color: #a8d1e7;					
				}

			}
			a{
				font-size: 1.2rem;
				font-weight: bold;
				padding: 1rem 2rem;
				list-style: none;
				text-decoration: none;
				color: #f76d6d;
				font-family: "Raleway", sanserif;
				transition: 500ms;
			}
		}
	}
`

const Code = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0rem 2rem;
	margin-bottom: 2rem;
	span{
		padding: 1rem;
		margin: 0rem 1rem;
		border-radius: 2rem;
		background-color: #a8d1e7;
	}
`

const DetailDescription = styled.div`
	padding: 2rem;
	div{
		section{
			width: 100%;
		}
		h3{
			font-family: "Raleway", sanserif;
			font-size: 1.5rem;
			color: #f76d6d;
			padding: 1rem 0rem;
		}
	}
	img{
		width: 50%;
		float: left;
		margin-right: 1rem;
	}
`

export default CardDetail;

