import React, { useEffect, useState } from 'react';
import BackgroudImage from '../components/BackgroudImage';
import axios from 'axios';
import login_bg from '../assets/images/login_bg.png';
import '../assets/css/Login.css';
import '../assets/css/Generic.css';
import { Link, useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import bcrypt from 'bcryptjs'

export default function Login() {
  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  let user = []
  const navigate = useNavigate()
  useEffect(()=>
  {
    if(localStorage.getItem('isLoggedIn'))
    navigate('/home')
  })
  const login = async () => 
  {
    axios.get(`http://127.0.0.1:8000/backend/user_api/?username=${username}&format=json`).then((response)=>{
      user = response.data
  }).finally(async ()=>{
    
      if(user.length === 0)
      {
        alert("Invalid username")
        return
      }
      else if (await bcrypt.compare(password,user[0].password))
        {
        localStorage.setItem('isLoggedIn',user)      
        navigate('/home')
        }
      else
        alert("Invalid Password")
  })}
  return (
    <BackgroudImage image={login_bg}>
      <center>
        <h1 className='title'>
          <Link to='/'>INFINITY TRIPS</Link>
        </h1>
      </center>
      <center>
        <h1 className='underlined'>Log In</h1>
        <div className='mt-5'>
          <InputBox type='text' id='username' placeholder='Username' value={username} setValue={setUsername}/>
          <InputBox type='password' id='password' placeholder='Password' value={password} setValue={setPassword} />
          <div style={{ width: '70vh' }} className='form-outline mb-4'>
            <Button text='Log In' onclick={login}/>
          </div>
          <h5>
            New User?<span>{'   '} </span>
            <Link style={{ color: 'gold' }} to='/signup'>
              Sign Up
            </Link>
          </h5>
        </div>
      </center>
    </BackgroudImage>
  );
}
