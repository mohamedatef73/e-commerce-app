import React from "react"
import './Home.scss'


function Home() {
    return (
        <div className='home'>
            <div className='row col-lg-12 col-md-12 '>
                <div className='pic col-lg-2 col-md-6'>
                    <div className='img'>image</div>
                </div>

                <div className='nav col-7 col-md-6'>
                        <div className='item col-lg-2 col-md-2'>contact</div>
                        <div className='item col-lg-2 col-md-2'>products</div>
                        <div className='item col-lg-3 col-md-2'>add to cart</div>
                </div>

            </div>
        </div>
    )
}

export default Home