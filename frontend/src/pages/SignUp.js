import React,  {useEffect, useState } from 'react';
import BackgroudImage from '../components/BackgroudImage';
import login_bg from '../assets/images/login_bg.png';
import axios from 'axios';
import bcrypt from 'bcryptjs'
import '../assets/css/Generic.css';
import {Link, useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox';
import Button from '../components/Button';


export default function Signup() {
  const [name, setName] = useState('');
  const [phno, setPhno] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(null);
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const navigate = useNavigate()
  
 
  useEffect(()=>
  {
    if(localStorage.getItem('isLoggedIn'))
    navigate('/home')
  })
  const submitData = async () => {
    
    if (repassword !== password)
    {
      alert("Passwords do not match");
      return
    }
  
    const hashedPassword = await bcrypt.hash(password,10)
    
    axios.post("http://127.0.0.1:8000/backend/create_user_api/",
    {
      name,phno,age,username,email,password:hashedPassword
    }
    ).then((response)=>
    {
      localStorage.setItem('isLoggedIn','1')
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })

  }
  return (
    <BackgroudImage image={login_bg}>
      <center>
        <h1 className='title'>
          <Link to='/'>INFINITY TRIPS</Link>
        </h1>
      </center>
      <div>
        <center>
          <h1 className='underlined'>Sign Up</h1>

          <div className='mt-5'>
            <InputBox
              type='text'
              id='name'
              placeholder='Full Name'
              value={name}
              setValue={setName}
            />
            <InputBox
              type='tel'
              id='phno'
              placeholder='Phone Number'
              value={phno}
              setValue={setPhno}
            />
            <InputBox
              type='number'
              id='age'
              placeholder='Enter Age'
              value={age}
              setValue={setAge}
            />
            <InputBox
              type='text'
              id='username'
              placeholder='Username'
              value={username}
              setValue={setUsername}
            />
            <InputBox
              type='email'
              id='email'
              placeholder='Email Address'
              value={email}
              setValue={setEmail}
            />
            <InputBox
              type='password'
              id='password'
              placeholder='Password'
              value={password}
              setValue={setPassword}
            />
            <InputBox
              type='password'
              id='repassword'
              placeholder='Retype Password'
              value={repassword}
              setValue={setRepassword}
            />

            <div style={{ width: '70vh' }} className='form-outline mb-4'>
              <Button text='Sign Up' onclick={submitData}/>
            </div>
            <h5>
              Already User?<span>{'   '} </span>
              <Link style={{ color: 'gold' }} to='/login'>
                Sign In
              </Link>
            </h5>
          </div>
        </center>
      </div>
    </BackgroudImage>
  );
}
