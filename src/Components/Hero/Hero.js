import React from 'react';
import Profilep from '../../images/ProfessionalPic.jpg';

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1 className="title">Who is Jordan Howard</h1>
                <div className="profile-pic">
                    <img src={Profilep} alt="professionalpic" className="image"></img>
                </div>
            </div>

        </div>
    )
}

export default Hero