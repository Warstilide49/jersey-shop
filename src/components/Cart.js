import cartImg from "../assets/shopping-cart.png"

const Cart = (props) =>{
	const {total, setModal} = props;

	const handler = (e) =>{
		setModal(true);
	}
	// Cart icon with number on top
	return(
		<div className='cart-icon' onClick={handler}>
			<img src={cartImg} alt="cart" />
			<div className='item-indicator'>{total}</div>
		</div>
	)
}

export default Cart