const Cart = (props) =>{
	const {total, setModal} = props;

	const handler = (e) =>{
		setModal(true);
		console.log(e)
	}
	// Cart icon with number on top
	return(
		<div onClick={handler}>
			{total}
		</div>
	)
}

export default Cart