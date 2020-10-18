import React from "react"
import './Home.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
import running from '../images/running.png'
import Tilt from 'react-parallax-tilt';
import pic from '../images/pic.jpg'
import green from '../images/green.png'
import brown from '../images/brown.png'
import img1 from '../images/img1.jpg'
import runs from '../images/runs.mp4'


function Home() {
    return (
        <div className='header'>
              <video className='videoTag' autoPlay loop muted>
                <source src={runs} type='video/mp4' />
              </video>

            <nav className="navbar navbar-expand-lg">
                <Link to='/' className="navbar-brand" >
                    <img src={icon} alt='store icon' /></Link>

                <button className="btn btn-success navbar-toggler" data-toggle="collapse"
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/about' className="nav-link text-warning">About
                            </Link>

                        </li>

                        <li className="nav-item active ">
                            <Link to='/contact' className="nav-link text-warning" >Contact Us
                            </Link>
                        </li>

                        <li className="nav-item dropdown active">
                            <a href="/" className="nav-link dropdown-toggle text-warning"
                                data-toggle="dropdown" >
                                Products Categories
                            </a>

                            <div className="dropdown-menu">
                                <Link to='/shoes' className="dropdown-item text-danger">Shoes
                            </Link>warning

                                <Link to='/supplements' className="dropdown-item text-danger" >Supplements
                            </Link>

                                <Link to='/gym' className="dropdown-item text-danger" >Gym tools
                            </Link>

                            </div>
                        </li>

                        <li className="nav-item active">
                            <Link to='/shopping-cart' className="nav-link text-warning" >Shopping Cart
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <section className='testimonial'>
                <div className='container-fluid'>

                    <div className='col-12'>
                    <div className='row'>
                            <div className='col-lg-6'>
                                <div className='product'>
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">

                                            <div class="carousel-item active">
                                                <div className="container">

                                                    <Tilt className="parallax-effect-img"
                                                        tiltMaxAngleX={40}
                                                        tiltMaxAngleY={40}
                                                        perspective={800}
                                                        transitionSpeed={500}
                                                    >

                                                        <div className="box">
                                                            <div className="name">
                                                                <div className="size">
                                                                    <strong>Size :</strong> &nbsp;
                                                                    <span>7</span>
                                                                    <span>8</span>
                                                                    <span>9</span>
                                                                    <span>10</span>
                                                                    <br /><br />
                                                                </div>
                                                                <div className="color">
                                                                    <strong>Color :</strong> &nbsp;
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="buy">Buy Now</a>
                                                            <div className="circle" style={{ background: '#9bdc28' }}>
                                                                <img src={running} className="product" alt="pic" />
                                                            </div>

                                                        </div>
                                                    </Tilt>
                                                </div>
                                            </div>

                                            <div className='carousel-item'>
                                                <div className="container">
                                                    <Tilt className="parallax-effect-img"
                                                        tiltMaxAngleX={40}
                                                        tiltMaxAngleY={40}
                                                        perspective={800}
                                                        transitionSpeed={500}
                                                    >

                                                        <div className="box">
                                                            <div className="name">
                                                                <div className="size">
                                                                    <strong>Size :</strong> &nbsp;
                                                                    <span>7</span>
                                                                    <span>8</span>
                                                                    <span>9</span>
                                                                    <span>10</span>
                                                                    <br /><br />
                                                                </div>
                                                                <div className="color">
                                                                    <strong>Color :</strong> &nbsp;
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="buy">Buy Now</a>
                                                            <div className="circle" style={{ background: '#2840aa' }}>
                                                                <img src={green} className="product" alt="pic" />
                                                            </div>

                                                        </div>
                                                    </Tilt>
                                                </div>


                                            </div>

                                            <div className='carousel-item'>
                                                <div className="container">
                                                    <Tilt className="parallax-effect-img"
                                                        tiltMaxAngleX={40}
                                                        tiltMaxAngleY={40}
                                                        perspective={800}
                                                        transitionSpeed={500}
                                                    >

                                                        <div className="box">
                                                            <div className="name">
                                                                <div className="size">
                                                                    <strong>Size :</strong> &nbsp;
                                                                    <span>7</span>
                                                                    <span>8</span>
                                                                    <span>9</span>
                                                                    <span>10</span>
                                                                    <br /><br />
                                                                </div>
                                                                <div className="color">
                                                                    <strong>Color :</strong> &nbsp;
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="buy">Buy Now</a>
                                                            <div className="circle" style={{ background: '#bd2a2c' }}>
                                                                <img src={brown} className="product" alt="pic" />
                                                            </div>

                                                        </div>
                                                    </Tilt>
                                                </div>


                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="text col-lg-4 pt-4 ">
                             <Tilt className="parallax-effect-img"
                                tiltMaxAngleX={40} tiltMaxAngleY={40}
                                perspective={800} transitionSpeed={500}>

                                <div className="testimonial__text">
                                    <p>
                                    ❦ Extremely flexible, lightweight and comfortable.Anti-slip dural rubber sole,
                                     lightweight and soft, so cool for walking and working.
                                     Perfect for outdoors indoors sports , Hiking , running ,
                                      climbing , shopping , school , work and so on occassions.
                                    </p>

                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src={pic} alt="" />
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Augusta Schultz</h5>
                                            <p>Fashion Design</p>
                                        </div>
                                    </div>
                                </div>
                             </Tilt>
                          </div>
                      </div>
                    </div>
                </div>
            </section>
        </div>



    )
}


export default Home
