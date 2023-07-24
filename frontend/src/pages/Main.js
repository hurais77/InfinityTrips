import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import SelectFilter from '../components/SelectFilter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

export default function Main() {
    const [hotels,setHotels] = useState([])
    const [cities,setCities] = useState([])
    const [types,setTypes] = useState([])
    const [currCity,setCurrCity] = useState('')
    const [currType,setCurrType] = useState('')
    
 
    const navigate = useNavigate()
    if (!localStorage.getItem('isLoggedIn'))
    navigate('/')

    const distinct = (array, attribute) =>
    {
      let unique = []
      for (let obj of array)
      {
        unique.push(obj[attribute])
      }
      return Array.from(new Set(unique))
    } 

    const filter_change = (e) =>
    {
      if (e.target.id === 'city')
      {
        setCurrCity(e.target.value)
      }
      else
      {
        setCurrType(e.target.value)
      }
    }
    useEffect(()=>
    {
        axios.get(`http://127.0.0.1:8000/backend/hotel_api/?format=json&city=${currCity}&type=${currType}`).then((response)=>
        {
            setHotels(response.data)
            setCities(distinct(response.data,'city'))
            setTypes(distinct(response.data,'type'))

        })
    },[])
    useEffect(()=>
    {
        axios.get(`http://127.0.0.1:8000/backend/hotel_api/?format=json&city=${currCity}&type=${currType}`).then((response)=>
        {
            setHotels(response.data)
        })
    },[currCity,currType])

    
  return (
  
    <div>
        <NavBar />
        <div className="m-5 row">
          <SelectFilter filter='City' options={cities} onchange={filter_change}/>
          <SelectFilter filter='Type' options={types} onchange={filter_change}/>
</div>
        
        <div className="m-5 row">
            {hotels.map((hotel)=>
            (
            <Card key={hotel.name} hotel={hotel}/>
            ))}
            
            </div>
        
        </div>
  )
  }
