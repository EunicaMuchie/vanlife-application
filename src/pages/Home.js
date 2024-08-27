import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import MainButton from '../Components/MainButton';


const Home = () => {
    return (
        <section id='sect'>
            <>
                <h1 id='HomeH1'> You got the travel plans, we got the travel vans. </h1>
                <p id='HomeP1'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to='/Vans'><MainButton title={'Find your van'} /></Link>
            </>
        </section>
    )
}

export default Home