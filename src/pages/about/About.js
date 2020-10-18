import React from "react"
import './About.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import sport from '../images/sport.jpg'
import shoes from '../images/shoes.png'








function About() {

    return (
        <div className='about'>
            <Link to='/' className="navbar-brand float-left" >
                <img src={icon} alt='store icon' /> </Link>
            <h1>About</h1>
 
      <Carousel arrows dots>
        <img src={sport} />
        <img src={sport} />
        <img src={shoes} />
      </Carousel>


        </div>
    )
}

export default About