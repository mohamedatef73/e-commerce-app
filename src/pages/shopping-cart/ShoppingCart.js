import React from "react"
import './ShoppingCart.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
import adiddas from '../images/adiddas.jpg'
import img1 from '../images/img1.jpg'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';






function ShoppingCart() {
    return (
        <div className='cart'>
            <Link to='/' className="navbar-brand float-left" >
                <img src={icon} alt='store icon' /> </Link>
            <h1>Shopping Cart</h1>

        </div>

    )
}

export default ShoppingCart