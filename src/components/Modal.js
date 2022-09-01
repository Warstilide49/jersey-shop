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

	return(
		<div className='modal_bg' onClick={(e) =>{setModal(false)}}>
			<div className='modal' onClick={(e) =>{e.stopPropagation();setModal(true)}}>
				<h4>Cart</h4>
				{
					Object.keys(productsInCart).map((item)=>{
						return(<Item imgSrc={commonLink + jerseys[item]} title={item} productsInCart={productsInCart} setProductsInCart={setProductsInCart} key={uuidv4()} />)
					})
				}
				<button>Checkout</button>
				<button onClick={clear}>Clear all items</button>
			</div>
		</div>
	)
}

export default Modal;