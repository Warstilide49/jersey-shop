const Item = (props) =>{
	const {imgSrc, title, price, productsInCart, setProductsInCart} = props;

	const incrementProduct = (e) =>{

		if (title in productsInCart){
			setProductsInCart({
				...productsInCart,
				[title] : productsInCart[title]+1
			})
		}
		else{
			setProductsInCart({
				...productsInCart,
				[title] : 1
			})
		}
	}

	const decrementProduct = (e) =>{
		if (title in productsInCart && productsInCart[title]!==1){
			setProductsInCart({
				...productsInCart,
				[title] : productsInCart[title]-1
			})
		}
		else if (productsInCart[title]===1){
			
			setProductsInCart( obj=> {
				const copy = {...obj};
				delete copy[title];
				return copy;
			})
		}
	}

	return(
		<div className='item'>
			<img src={imgSrc} alt={title}></img>
			<h4>{title}</h4>
			<h4 className='price'>{"$ "+ price}</h4>
			<div className='count-handler'>
				<button onClick={incrementProduct}>Add</button>
				<div>{productsInCart[title]}</div>
				<button onClick={decrementProduct}>Remove</button>
			</div>
		</div>
	)
}

export default Item;