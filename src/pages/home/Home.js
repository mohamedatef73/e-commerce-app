import React from "react"
import './Home.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'



function Home() {

    return (
        <div className='header'>

            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='/' className="navbar-brand" >
                <img src={icon} alt='store icon' /> </Link>



                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/about' className="nav-link text-warning" >About
                            </Link>

                        </li>
                        <li className="nav-item active ">
                            <Link to='/contact' className="nav-link text-warning" >Contact Us
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link to='/shopping-cart' className="nav-link text-warning" >Shopping Cart
                            </Link>

                        </li>

                        <li className="nav-item dropdown active">
                            <a  href="/" className="nav-link dropdown-toggle text-warning" 
                                data-toggle="dropdown" >
                                Products Categories
                            </a>

                            <div className="dropdown-menu">
                                <Link to='/shoes' className="dropdown-item text-danger" >Shoes
                            </Link>

                                <Link to='/supplements' className="dropdown-item text-danger" >Supplements
                            </Link>

                                <Link to='/gym' className="dropdown-item text-danger" >Gym tools
                            </Link>

                            </div>
                        </li>

                    </ul>
                </div>
            </nav>




        </div>
    )
}


export default Home
