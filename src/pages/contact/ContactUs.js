import React from "react"
import './ContactUs.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';






function ContactUs() {
    return (
        <div className='contact'>
            <Link to='/' className="navbar-brand float-left" >

                <img src={icon} alt='store icon' /></Link>

            <h1>Contact Us</h1>

        </div>
    );
}


export default ContactUs