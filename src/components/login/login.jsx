import React, { useState, useEffect } from 'react';
import './login.css';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import img1 from "../assets/login.jpg";
import img2 from "../assets/signup.jpg";

const LoginModal = ({ isOpen, onClose, onLogin, onRegister, onGoogleLogin, onFacebookLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            onLogin(username, password);
        } else {
            onRegister(username, password, firstname, lastname);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="login-container">
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-content">
                        <div className="image-div" >
                            <img src={isLogin ? img1 : img2} alt="Description" />
                        </div>
                        <div className="form-div" style={{ flex: '1' }}>
                            <button className="close-button" onClick={onClose}>x</button>
                            <h2>{isLogin ? 'Login' : 'Register'}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    {!isLogin && (
                                        <div className="name-inputs">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                required
                                            />
                                        </div>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="primary-button">
                                        {isLogin ? 'Login' : 'Register'}
                                    </button>
                                </div>

                                <div className="divider">
                                    <span>or continue with</span>
                                </div>

                                <div className="social-login">
                                    <button 
                                        type="button" 
                                        className="social-button google-btn"
                                        onClick={onGoogleLogin}
                                    >
                                        <img src={google} alt="Google" />
                                    </button>
                                    <button 
                                        type="button" 
                                        className="social-button facebook-btn"
                                        onClick={onFacebookLogin}
                                    >
                                        <img src={facebook} alt="Facebook" />
                                    </button>
                                </div>
                            </form>
                            <div className="toggle-form">
                                <p>
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <button 
                                        className="toggle-button" 
                                        onClick={() => setIsLogin(!isLogin)}
                                    >
                                        {isLogin ? 'Register here' : 'Login here'}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
