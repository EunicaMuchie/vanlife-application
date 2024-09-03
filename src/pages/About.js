import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import MainButton from '../Components/MainButton';
const About = () => {
    return (

        // About section
        <div>
            <>
                <div id='pic'></div>
                <h1 id='AboutH1'> Dont squeez in a sedan when you could relax in a van.</h1>
                <p id='AboutP1'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>
                <p id='AboutP2'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div id='orangeyDiv'>
                    <h2 id='AboutH2'>Your destination is waiting.<br></br>Your van is ready.</h2>
                    <div className='ABT'><Link to='/Vans'><MainButton title={"Explore our vans"} /></Link>
                    </div>
                </div>
            </>
        </div>
    )
}

export default About
