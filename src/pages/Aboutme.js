import React, { useEffect } from 'react';
import Hero from '../Components/Hero/Hero';
import Profilep from '../images/ProfessionalPic.jpg';

const Aboutme = () => {

    //allows me to switch pages and start at the top no matter where i was at in the prev. page
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <Hero/>
            <div className="me-container">
                <div className="profile-pic">
                    <img src={Profilep} alt="professionalpic" className="image"></img>
                    <p className="info-text">
                        <h2>Hi, I'm Jordan</h2>
                        I'm a new and upcoming software developer that just graduated from the rigorous Road to Hire program. With also being a Road to Hire Fellow I am also a very big Car enthusiast and amature car drifter. I was recently an automotive technician at a dealership. I will bring my problem solving skills,determination, and communication skills into my new career path. I hope to one day become a full-stack developer, and I will continue to work to my best ability to make sure I keep building on current skills, to achieve my goal.
                    </p>
                    <a href="https://drive.google.com/file/d/1LSwrkayU3TspuS238T_wkdURPNXU6RhM/view?usp=sharing" target="_blank" rel="noreferrer"><button className="resume">Resume</button></a>
                </div>
            </div>
        </>
    )
}

export default Aboutme;