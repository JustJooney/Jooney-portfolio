import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

function Home(){

	return(
		<>
			<Nav/>
	    	<Header/>
	    	<About/>
	    	<Skills/>
    		<Project/>
	    </>
	)
}

export default Home;