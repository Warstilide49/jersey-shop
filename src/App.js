import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'

import Home from './pages/Home'
import Shop from './pages/Shop'
import PageNotFound from "./pages/PageNotFound"

import "./styles/main.css"
import "./styles/content.css"

const App = () =>{
	const [totalProducts, setTotal] = useState(0);
	const [productsInCart, setProductsInCart] = useState({});
	const [modalOpen, setModal] = useState(false);

	useEffect(()=>{
		if(modalOpen){
			document.body.classList.add('modal-open')
		}
		else{
			document.body.classList.remove('modal-open')
		}
	}, [modalOpen])

	return(
		<BrowserRouter>
			<Header total={totalProducts}  setModal={setModal}/>
			<Routes>
				<Route path="/jersey-shop" element={<Home />}/>
				<Route path="/jersey-shop/shop" element={<Shop setTotal={setTotal} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/>
				<Route path="/jersey-shop/*" element={<PageNotFound />} />
			</Routes>
			<Footer/>
			{modalOpen && <Modal setModal={setModal} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}
		</BrowserRouter>
	)
}

export default App;