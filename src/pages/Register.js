import React from 'react'
import { useState,useEffect } from 'react';
import { FaUser} from 'react-icons/fa';


const Register = () => {
    const [formData,setFormData] = useState({
        fname:'',
        lname:'',
        alias:'',
        email:'',
        password:'',
        password2:'',
    });

    const handleOnChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
    };
    const onSubmit = (e) =>{
    };

    const {lname,fname,alias,email,password,password2 } = formData;
  return (
    <div>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section>
            <div className='form-group'>
            <form>
                <input 
                    type="text" 
                    className='form-control' 
                    id='fname' 
                    name='fname' 
                    value={fname} 
                    placeholder="enter your first name"
                    onChange={handleOnChange}/>
            </form>
            </div>
            <div className='form-group'>
            <form>
                <input 
                    type="text" 
                    className='form-control' 
                    id='lname' 
                    name='lname' 
                    value={lname} 
                    placeholder="enter your last name"
                    onChange={handleOnChange}/>
            </form>
            </div>
            <div className='form-group'>
            <form>
                <input 
                    type="text" 
                    className='form-control' 
                    id='alias' 
                    name='alias' 
                    value={alias} 
                    placeholder="enter your alias"
                    onChange={handleOnChange}/>
            </form>
            </div>
            <div className='form-group'>
            <form>
                <input 
                    type="email" 
                    className='form-control' 
                    id='email' 
                    name='email' 
                    value={email} 
                    placeholder="enter your email"
                    onChange={handleOnChange}/>
            </form>
            </div>
            <div className='form-group'>
            <form>
                <input 
                    type="text" 
                    className='form-control' 
                    id='password' 
                    name='password' 
                    value={password} 
                    placeholder="enter your password"
                    onChange={handleOnChange}/>
            </form>
            </div>
            <div className='form-group'>
            <form>
                <input 
                    type="text" 
                    className='form-control' 
                    id='password2' 
                    name='password2' 
                    value={password2} 
                    placeholder="confirm your password"
                    onChange={handleOnChange}/>
            </form>
            </div>
            <div className='form-group'>
            <form onSubmit={onSubmit()}>
                <input 
                    type="submit" 
                    className='form-control'/>
            </form>
            </div>
        </section>
    </div>
  )
}

export default Register