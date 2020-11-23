import musicplayer from '../img/musicplayer.png';
import littlefilm from '../img/littlefilm.png';
import flame from '../img/flame.jpg';
import nature from '../img/nature.png';
import weather from '../img/weather.png';
import weatherG from '../img/weatherG.gif';
import musicplayerG from '../img/musicplayerG.gif';
import littlefilmG from '../img/littlefilmG.gif';
import natureG from '../img/natureG.gif';
import flameG from '../img/flameG.gif';
import {v4 as uuidv4} from 'uuid';

export const ProjectData = [
	{
		name: "Music Player",
		id: uuidv4(),
		img: musicplayer,
		gif: musicplayerG,
		url: "https://priceless-archimedes-555bda.netlify.app/",
		gitHub: "https://github.com/JustJooney/Music-Player",
		objective: "The objective was to create a music player with a library.",
		problems: "Trying to figure out to make a progress bar for the music player was frustrating.",
		solutions: "To use the input type range in the form section of an Html and modifying it to create a progress bar for the player.",
		summary: "Creating a music player in my head seemed straightforward but laying it out on code makes you think of different angles on creating a music player.",
		code: [
			"Html",
			"CSS",
			"Javascript",
			"Scss",
			"React",
		]
	},
	{
		name: "Little Film",
		id: uuidv4(),
		img: littlefilm,
		gif: littlefilmG,
		url: "https://epic-gates-12653c.netlify.app/",
		gitHub: "https://github.com/JustJooney/Little-Film",
		objective: "To create a landing page for the film business.",
		problems: "The animation for the transitions on the page was pretty challenging, especially using a new animation library for React.",
		solutions: "To correctly put in the values in the new library.",
		summary: "Framer Motion(the new animation library) is an easy way to create animations in react. It does the heavy lifting, and all you got to do is learn how they format their code, and you're pretty much good to go.",
		code: [
			"Html",
			"CSS",
			"Javascript",
			"Styled Components",
			"React",
		]
	},
	{
		name: "Flame",
		id: uuidv4(),
		img: flame,
		gif: flameG,
		url: 'https://competent-jang-512c54.netlify.app/',
		gitHub: "https://github.com/JustJooney/Flame",
		objective: "Use a game API to get information on games and make a navbar to search for your choosing games.",
		problems: "One problem was that the website would not render a component because it didn't get the API data before React generated the website.",
		solutions: "The solution was to create a simple boolean state to check whether the component had received the API data and if it did. React would generate the element.",
		summary: "React can be a robust library, especially when you combine it with a state management library like Redux. Put those two together, and you will have an easier time with a more prominent website that has lots of data.",
		code: [
			"Html",
			"CSS",
			"Javascript",
			"API",
			"Styled Components",
			"React",
			"Redux",
		]
	},
	{
		name: "Nature",
		id: uuidv4(),
		img: nature,
		gif: natureG,
		url: "https://musing-kowalevski-fd7bd2.netlify.app/",
		gitHub: "https://github.com/JustJooney/Nature",
		objective: "To create a landing page for a nature park.",
		problems: "I had one issue where I couldn't get the images to show how I wanted them to deliver.",
		solutions: "It turns out a simple fix was to use flexbox. (Flexbox is pretty powerful)",
		summary: "It was fun to think of ideas on how to create a landing page for a place. Putting up pictures and people made me want to believe this place existed.",
		code: [
			"Html",
			"CSS",
			"Javascript",
			"Styled Components",
			"React",
		]			
	},
	{
		name: "What's My Weather",
		id: uuidv4(),
		img: weather,
		gif: weatherG,
		url: "https://vibrant-bassi-8b4dee.netlify.app/",
		gitHub: "https://github.com/JustJooney/WhatsMyWeather",
		objective: "To create a website that uses the weather API to find your weather.",
		problems: "I had a problem where every time I put the time information into the website. The data would send a UTC timestamp, which was very confusing.",
		solutions: "I found a method to take the UTC timestamp and convert to your timezone.",
		summary: "It was exciting to look through an API that was somewhat new to me and take some time to figure things out.",
		code: [
			"Html",
			"CSS",
			"Javascript",
			"API",
			"Styled Components",
			"React",
		]		
	}
]