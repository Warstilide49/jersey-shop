import {useState, useEffect} from 'react'
import Item from '../components/Item'
import jerseys from "../assets/jerseyImgs.json"
import { v4 as uuidv4 } from 'uuid';

const Shop = (props) =>{

	const commonLink = "https://images.classicfootballshirts.co.uk/pub/media/catalog/product/"
	const allProducts = Object.keys(jerseys);
	const [productsInCart, setProductsInCart] = useState({});
	

	// To update total products in header
	const {setTotal} = props;

	useEffect(()=>{
		setTotal( Object.values(productsInCart).reduce((sum, value)=>{
			return sum + value
		}, 0));
	},[allProducts, setTotal, productsInCart]);

	return(
		<div id='container'>
			{allProducts.map(item =>{
				return(<Item imgSrc={commonLink + jerseys[item]} title={item} productsInCart={productsInCart} setProductsInCart={setProductsInCart} key={uuidv4()} />)
			})}
		</div>
	);
}

export default Shop