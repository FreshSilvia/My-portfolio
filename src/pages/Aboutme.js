import React, { useEffect } from 'react';
import Hero from '../Components/Hero/Hero';


const Aboutme = () => {

    //allows me to switch pages and start at the top no matter where i was at in the prev. page
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <Hero/>
            <h1 className="me">About Me</h1>
            <p className="info-text">
                We are group of friends who love the need for speed, and want share that same love of motorsports with the rest of the car community. Here at GarageInsomnia, motorsports is more than just a sport, it's an art and lifestyle. Our job here is to provide our customers with great quality stock and performance automotive racing parts. Here you will find some of the lowest prices on Nissan aftermarket parts and other performance auto parts that you can relay on to relieve your need for speed.We only carry dependable performance parts that allow you to take your car to the next level in your build.We can offer some advice, great customer service, and the convenience of being able to shop right from your home, the track, and anywhere else you feel to upgrade your car. 
            </p>
        </>
    )
}

export default Aboutme;