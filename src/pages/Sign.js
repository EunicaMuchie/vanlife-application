import React from 'react'
import './Sign.css';
// import '../inter';
import { Link } from 'react-router-dom';


const Sign = () => {
    return (
        <div>
        
            <h1 className="content1">Sign in to your account</h1>

            <form className="form-group" >
                <input type="text" placeholder="Email address"></input>
                <input type="text" placeholder="Password"></input>
                <button className='signbtn'>Sign in</button>
            </form>

            <p className='p-one'>Don’t have an account? <Link to="/SignUp" id='create'>Create one now</Link></p>
        </div>
    )
}

export default Sign
