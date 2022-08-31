import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

import "./styles/main.css"

function Router(){
	return(
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/shop" element={<Shop />}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

export default Router;