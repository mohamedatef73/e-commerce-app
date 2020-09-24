import React from "react"
import './Home.scss'
import { AppstoreTwoTone } from '@ant-design/icons';



function Home() {

    return (
        <div className='header'>

            <nav className="navbar navbar-expand-lg navbar-light">

                <a className="navbar-brand" href="#">
                    <AppstoreTwoTone style={{ fontSize: '40px', color: '#08c' }} />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Shopping Cart</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                        <li className="nav-item dropdown active">

                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products Categories
                            </a>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
