import { Link } from "react-router-dom";
import Cart from './Cart'
import Jersey from '../assets/jersey-icon.png'

const Header = (props) =>{
	const {total, setModal} = props;

	return(
		<div id='header'>
			<div className='name-logo'>
				<img src={Jersey} alt="jersey"/>
				<h2>Sphere Joys</h2>
			</div>
			<div className='nav'>
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Cart total={total} setModal={setModal} />
			</div>
		</div>
	)
}

export default Header;	