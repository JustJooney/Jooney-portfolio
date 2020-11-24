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
		objective: "Music player with a playlist library.",
		problems: "Figuring out a way to code the progress bar to be responsive",
		solutions: "I used the range input in the form section of an Html and modified it to create a progress bar for the player.",
		summary: " Although creating a music player seems straightforward, I had to figure out a creative way to optimize the player and progress bar for the best user experience.",
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
		objective: "Landing page for a film business.",
		problems: "Using a new animation library for React (Framer Motion).",
		solutions: "Navigated through the documents and learned how to fluently and correctly put in the new library's values.",
		summary: "Using Framer Motion is a convenient way to create animations in React. It’s a time saving and powerful library as long as it is used with good comprehension.",
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
		objective: "Use an API to fetch information on video games, along with a navbar to search for matches of your choosing.",
		problems: "The website would not render a component because it didn't get the API data before React generated it.",
		solutions: "I created a boolean state to check whether the component had received the API data and if it did. React would generate the element.",
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
		objective: "A landing page for a nature park.",
		problems: "The images in the gallery wouldn’t show up exactly the way I designed them.",
		solutions: "I used flexbox to align the gallery images in the way I wanted them to appear. ",
		summary: "Flexbox is pretty powerful, and it was fun creating a landing page for a location. Putting up pictures of the environment and people made the website come to life.",
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
		objective: "A website that uses the weather API to find your weather.",
		problems: "When the API put in the time data into the website, it would only show up as an Epoch Unix timestamp, confusing the users.",
		solutions: "Found a method to take the Epoch Unix timestamp and convert it to the local timezone.",
		summary: "It was exciting to look through an API that was somewhat new to me and explore its capabilities.",
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
