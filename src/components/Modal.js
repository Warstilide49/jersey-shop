import "../styles/modal.css"
import jerseys from "../assets/jerseyImgs"
import { v4 as uuidv4 } from 'uuid';
import Item from './Item'

const Modal = (props) =>{

	const {setModal, productsInCart, setProductsInCart} = props;
	const commonLink = "https://images.classicfootballshirts.co.uk/pub/media/catalog/product/"
	
	const clear = () =>{
		setProductsInCart({});
	}

	// price*quantity
	const findTotal = () =>{
		const total= Object.keys(productsInCart).reduce((previous, current) =>{
			return previous + (jerseys[current]["price"] * productsInCart[current] )
		},0)
		return total;
	}

	return(
		<div className='modal_bg' onClick={(e) =>{setModal(false)}}>
			<div className='modal' onClick={(e) =>{e.stopPropagation();setModal(true)}}>
				<h3><u>Cart</u></h3>
				<div className='modal_container'>{
					Object.keys(productsInCart).map((item)=>{
						return(<Item imgSrc={commonLink + jerseys[item]["site"]} title={item} price={jerseys[item]["price"]}  productsInCart={productsInCart} setProductsInCart={setProductsInCart} key={uuidv4()} />)
					})
				}
				</div>
				<h4>{"Total: $" + findTotal()}</h4>
				<div className='buttons'>
					<button>Checkout</button>
					<button onClick={clear}>Clear all items</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;