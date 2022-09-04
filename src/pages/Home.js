import Carousel from '../components/Carousel'

import Image1 from "../assets/football-covers/1.jpg"
import Image2 from "../assets/football-covers/2.jpg"
import Image3 from "../assets/football-covers/3.jpg"
import Image4 from "../assets/football-covers/4.jpg"
import Image5 from "../assets/football-covers/5.jpg"


import "../styles/home.css"

const Home = () =>{
	return(
		<div id='home'>
			<div id='banner'>
				<div id='info-card'>
					<h1>One stop for all your jersey needs!</h1>
					<h5>Shop through over 10,000 products to get the jersey you, as a supporter, need!</h5>
				</div>
				<Carousel Images={[Image1,Image2,Image3, Image4, Image5]} />
			</div>
			<div id='newsletter'>
				<h3>Sign up for regular emails to not miss a hot product!</h3>
				<button>Sign up</button>
			</div>
		</div>
	)
}

export default Home