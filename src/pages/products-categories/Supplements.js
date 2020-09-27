import React from "react"
import './ProductsCategories.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'





function Supplements() {
    return (
        <div className='supplements'>
            <Link to='/' className="navbar-brand float-left" >

                <img src={icon} alt='store icon' /> </Link>


            <h1>supplements</h1>
        </div>
    )
}

export default Supplements