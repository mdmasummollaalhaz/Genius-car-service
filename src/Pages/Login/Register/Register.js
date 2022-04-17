import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);
    }
    return (
        <div className='container w-50 mx-auto mt-5 register-form'>
            <h2 style={{textAlign: 'center'}}>Please, Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" ref={nameRef} name="name" id="" placeholder='Your name' required/>
                <input type="email" ref={emailRef} name="email" id="" placeholder='Your email' required/>
                <input type="password" ref={passwordRef} name="password" id="" placeholder='password' required/>
                <input type="submit" value="Register" />
            </form>
      <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please, login</Link></p>
        </div>
    );
};

export default Register;