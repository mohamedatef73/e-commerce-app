import React from "react"
import './About.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'




function About() {
    return (
        <div className='about'>
            <Link to='/' className="navbar-brand float-left" >
                <img src={icon} alt='store icon' /> </Link>
            <h1>About</h1>
        </div>
    )
}

export default About