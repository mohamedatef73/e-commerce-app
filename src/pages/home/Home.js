import React from "react"
import './Home.scss'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
// import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import item3 from '../images/item3.webp'
import item1 from '../images/item1.jpg'
import item6 from '../images/item6.jpg'
import run from '../images/run.jpg'
import runs from '../images/runs.mp4'
import item from '../images/item.jpg'
import orange from '../images/orange.jpg'








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


            <div className='intro' >
            <Card className='content'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={item3}
                            title="Contemplative Reptile"
                        />
                        <CardContent className='intrduce'>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
          </Typography >
                            <Typography variant="body2" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
          </Typography>
                        </CardContent>
                        <CardActions className='link'>
                        <button className='btn btn-danger w-100'>
                            BUY NOW
                        </button>
                    </CardActions>

                    </CardActionArea>
                </Card>


                <Card className='content'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={item6}
                            title="Contemplative Reptile"
                        />
                        <CardContent className='intrduce'>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                        </Typography >
                            <Typography variant="body2" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className='link'>
                        <button className='btn btn-danger w-100'>
                            BUY NOW
                        </button>
                    </CardActions>

                    </CardActionArea>
                </Card>

                <Card className='content'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            component="img"
                            image={run}
                            title="Contemplative Reptile"
                        />
                        <CardContent className='intrduce'>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className='link'>
                        <button className='btn btn-danger w-100'>
                            BUY NOW
                        </button>
                    </CardActions>

                    </CardActionArea>
                </Card>

                <Card className='content'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={item1}
                            title="Contemplative Reptile"
                        />
                        <CardContent className='intrduce'>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className='link'>
                        <button className='btn btn-danger w-100'>
                            BUY NOW
                        </button>
                    </CardActions>

                    </CardActionArea>
                </Card>
                </div> 



{/* alternate design */}
<div className='new'>
            <div className='box'
             style={{
                background: 'linear-gradient(235deg,#89ff00,#010615,#00bcd4)'

            }}>
                <div className='imgBx'>
                    <img src={item} alt='' />
                </div>
                <div className='detail'>
                <button className='btn btn-danger w-50'>
                            BUY NOW
                        </button>
                </div>
            </div>

            <div className='box'
            style={{
                background: 'linear-gradient(235deg,#89ff00,#010615,#fbff00)'

            }}>
                <div className='imgBx'>
                    <img src={item3} alt='' />
                </div>
                <div className='detail'>
                <button className='btn btn-danger w-100'>
                            BUY NOW
                        </button>
                </div>
            </div>
            <div className='box'
             style={{
                background: 'linear-gradient(235deg,#89ff00,#010615,#2196f3)'

            }}>
                <div className='imgBx'>
                    <img src={item1} alt='' />
                </div>
                <div className='detail'>
                <button className='btn btn-danger w-100'>
                            BUY NOW
                        </button>
                </div>
            </div>
            </div>
            {/* end alternate design */}



            {/* <section className='testimonial'>
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
            </section> */}
        </div>



    )
}


export default Home
