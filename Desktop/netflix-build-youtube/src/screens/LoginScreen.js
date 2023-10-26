import React, {useState} from 'react';
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSingIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://1000marche.net/wp-content/uploads/2020/03/Netflix-logo.png" alt="" />
                <button className="loginScreen__button" onClick={() => setSingIn(true)}>Sign In</button>
                <div className="loginScreen__gradient" />
            </div>


            <div className='loginScreen__body'>
            {signIn?(

                <SignupScreen />
            ):( <>
                    <h1>Unlimited films,TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type='email' placeholder='Email address' />
                            <button className='loginScreen__getStarted' onClick={() => setSingIn(true)}> Get Started </button>
                        </form>
                    </div>





                </>)}


            </div>

        </div>
    );
}

export default LoginScreen;