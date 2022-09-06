import {useEffect} from 'react'
import Item from '../components/Item'
import jerseys from "../assets/jerseyImgs.json"
import { v4 as uuidv4 } from 'uuid';

const Shop = (props) =>{

	const commonLink = "https://images.classicfootballshirts.co.uk/pub/media/catalog/product/"
	const allProducts = Object.keys(jerseys);
	const {productsInCart, setProductsInCart, setTotal} = props;
	
	// To update total products in header
	useEffect(()=>{
		setTotal( Object.values(productsInCart).reduce((sum, value)=>{
			return sum + value
		}, 0));
	},[setTotal, productsInCart]);

	return(
		<div id="shop">
			<h2>Products</h2>
			<div id='container'>
				{allProducts.map(item =>{
					return(<Item imgSrc={commonLink + jerseys[item]["site"]} title={item} price={jerseys[item]["price"]} productsInCart={productsInCart} setProductsInCart={setProductsInCart} key={uuidv4()} />)
				})}
			</div>
		</div>
	);
}

export default Shop