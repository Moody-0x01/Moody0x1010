import NavBar from "./navbar.jsx"
import Hero from "./hero.jsx"
import Projects from "./projects.jsx"
import About from "./about.jsx"
import Music from "./music.jsx"
import Contact from "./contact.jsx"
// import Player  from "./Music_player.jsx"

export default function App() {

  return (
  <>
	<NavBar   />
	<Hero     />
	<Projects />
	<About />
  <Music />
  <Contact />
  {/* <Player/> */}
  </>
  );
}
