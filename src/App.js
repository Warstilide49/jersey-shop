import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

import "./styles/main.css"
import "./styles/content.css"

const App = () =>{
	const [totalProducts, setTotal] = useState(0);
	const [productsInCart, setProductsInCart] = useState({});
	const [modalOpen, setModal] = useState(false);

	return(
		<BrowserRouter>
			<Header total={totalProducts}  setModal={setModal}/>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/shop" element={<Shop setTotal={setTotal} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/>
			</Routes>
			<Footer/>
			{modalOpen && <Modal setModal={setModal} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}
		</BrowserRouter>
	)
}

export default App;