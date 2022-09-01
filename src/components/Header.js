import { Link } from "react-router-dom";

const Header = (props) =>{
	return(
		<div id='header'>
			<h2>Sphere Joys</h2>
			<div className='nav'>
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
				<div>{props.total}</div>
			</div>
		</div>
	)
}

export default Header;	