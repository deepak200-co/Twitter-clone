import React, { useState } from "react";
import './Login.css'
import twitterImage from '../../assets/images/twitter.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from '../../firebaseinit';
import { useCreateUserWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Googlebutton from 'react-google-button'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate();



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(error){
        console.log(error.message)
      }
      if(user || googleuser){
        navigate('/')
        console.log(user)
        console.log(googleuser)
      }
      if(loading){
        console.log('loading....')
      }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);

        const user={
            name,
            username,
            email

        }
        axios.post(`http://localhost:5000/register`, user)

    }
    const handleGoogleSignIn =() =>{
        signInWithGoogle();
    }

    return (
        <div className="Login-container">
            <div class="image-container">
                <img className="image" src={twitterImage} alt="twitter-bacground" />

            </div>
            <div class="form-container">
                <div className="form-box">
                    <TwitterIcon className="TwitterIcon" style={{ color: 'skyblue' }} />
                    <h2 className="heading"> Happeing now </h2>
                    <h3 className="heading1">Join Twitter Today</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            className="display-name"
                            placeholder="@username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <input type="text"
                            className="display-name"
                            placeholder="Enter full name"
                            onChange={(e) => setName(e.target.value)} />
                        <input type="email"
                            className="email"
                            placeholder="email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password"
                            className="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="btn-login">
                            <button type="submit" className="btn" onClick={() => createUserWithEmailAndPassword(email, password)}>Signup</button>
                        </div>
                    </form>
                    <hr />
                    <div className="google-btn">
                        <Googlebutton
                            className="g-btn"
                            type="light"
                            onClick={handleGoogleSignIn}
                        />

                    </div>
                    <div className='sign-login'>
                        Already have an account?
                        <Link to='/login' style={{
                            textDecoration: 'none',
                            color: 'skyblue',
                            fontWeight: '600',
                            marginLeft: '5px'
                        }} >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup;