import { Link } from "react-router-dom";
import Cart from './Cart'

const Header = (props) =>{

	const {total, setModal} = props;

	return(
		<div id='header'>
			<h2>Sphere Joys</h2>
			<div className='nav'>
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
				<Cart total={total} setModal={setModal} />
			</div>
		</div>
	)
}

export default Header;	