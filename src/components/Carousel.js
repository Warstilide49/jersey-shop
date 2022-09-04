import {useState, useEffect} from "react"
import "../styles/carousel.css"

const Carousel = (props) =>{

	const {Images} = props;
	const [length, setLength] = useState(0);
	const [index, setIndex] = useState( Math.floor(Math.random()*Images.length) ) ;

	useEffect(()=>{
		
		const intervalId = setInterval(() => {
			if(length!==100){
	    		setLength(100);
	    	}
	    	else{
	    		setLength(2);
	    		setIndex((index+1)% (Images.length))
	    	}
	    },2000);

	    return () => clearInterval(intervalId);
	},[length,index, Images.length])


	return(
		<div id='carousel'>
			<img src={Images[index]} alt='football-cover'/>
			<div style={{width: length+"%" }} className='timer' ></div>
		</div>
	)
}

export default Carousel;