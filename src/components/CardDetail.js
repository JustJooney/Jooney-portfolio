import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion';

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
					<Detail >
						<DetailNav>
							<h1>{data.name}</h1>
							<ul>
								<li><a href={data.url} target="_blank" rel="noreferrer">Website</a></li>
								<li><a href={data.gitHub} target="_blank" rel="noreferrer">Github</a></li>
							</ul>
						</DetailNav>
						<Code>
							<p>Programs used:</p>
							{data.code.map((code) => <span key={code}>{code}</span>)}
						</Code>
						<DetailDescription>
							<a href={data.url} target="_blank" rel="noreferrer"><motion.img  src={data.gif}  alt={data.name} /></a>
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

const StyledCardDetail = styled(motion.div)`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Detail = styled(motion.div)`
	width: 80%;
	z-index: 10;
	height: 90%;
	overflow-x: hidden;
	overflow-y: scroll;
	position: fixed;
	background: #374785;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	@media(max-width: 768px){
		display: block;
	}
`

const DetailNav = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 2rem;
	@media(max-width: 768px){
		flex-direction: column;
		justify-content: center;
	}
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
	@media(max-width: 768px){
		ul{
			margin: 1rem 0rem;
			li{
				margin:0rem 1rem;
			}
		}
	}
	@media(max-width: 425px){
		ul{
			flex-direction: column;
			li{
				margin: 1rem 0rem;
			}
		}
	}
`

const Code = styled.div`
	padding: 0rem 2rem;
	margin-bottom: 2rem;

	font-size: 1.3rem;
	p{
		margin-bottom: 1rem;
	}
	span{
		padding: 1rem 0.5rem;
	}
	@media(max-width: 425px){
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

const DetailDescription = styled(motion.div)`
	padding: 2rem;
	div{
		section{
			width: 100%;
		}
		@media(max-width: 1464px){
			margin-top: 2rem;
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
	@media(max-width: 768px){
		img{
			width: 100%;
			float: none;
		}

	}
`

export default CardDetail;

