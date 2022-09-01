import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

import "./styles/main.css"
import "./styles/content.css"

const App = () =>{
	const [totalProducts, setTotal] = useState(0);

	return(
		<BrowserRouter>
			<Header total={totalProducts}/>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/shop" element={<Shop setTotal={setTotal}/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

export default App;