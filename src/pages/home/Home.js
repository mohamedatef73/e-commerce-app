import React from "react"
import './Home.scss'
import { Link } from 'react-router-dom'



function Home() {

    return (
        <div className='header'>

            <nav className="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"> <img src={require('../images/icons8-shopify-96.png')} alt='store icon' /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-warning" href="#">About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-warning" href="#">Shopping Cart</a>
                        </li>
                        <li className="nav-item active ">
                            <Link to='/contact' className="nav-link text-warning" >Contact Us
                            </Link>
                        </li>

                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle text-warning" href="#"
                                data-toggle="dropdown" >
                                Products Categories
                            </a>

                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">choes</a>
                                <a className="dropdown-item" href="#">Supplements</a>
                                <a className="dropdown-item" href="#">Gym tools</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>




        </div>
    )
}


export default Home
