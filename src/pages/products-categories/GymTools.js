import React from "react"
import './ProductsCategories.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'





function GymTools() {
    return (
        <div className='gym'>
            <Link to='/' className="navbar-brand float-left" >

                <img src={icon} alt='store icon' /> </Link>


            <h1>Gym Tools</h1>
        </div>
    )
}

export default GymTools