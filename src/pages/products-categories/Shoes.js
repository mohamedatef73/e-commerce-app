import React from "react"
import './ProductsCategories.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'





function Shoes() {
    return (
        <div className='shoes'>
            <Link to='/' className="navbar-brand float-left" >

                <img src={icon} alt='store icon' /> </Link>




            <h1>Shoes</h1>
        </div>
    )
}

export default Shoes