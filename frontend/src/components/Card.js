import React, { useContext} from 'react'
import HotelContext from '../store/hotel-context'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {
  const navigate = useNavigate()
  const [hotel,setHotel] = useContext(HotelContext)
  const render_price = (hotel) =>
  {
    if(hotel.type === 'Hotel')
    return `Price : \u20B9${hotel.room_price}`
    if(hotel.type === 'Hostel')
    return `Price : \u20B9${hotel.non_ac_bed_price} - ${hotel.ac_bed_price}`
  }
  const checkout = () =>
  {
    setHotel(props.hotel)
    navigate('/checkout')
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6" >
    <div className="card mb-5" >
    <img src={props.hotel.image_url} className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="card-title">{props.hotel.name}</h5>
      <p className="card-text"><b>City : {props.hotel.city}<br/>
        {render_price(props.hotel)}
        </b></p>
      
      <button className="btn btn-dark"  onClick={checkout}>Book It!</button>
    </div>
  </div>
  </div>
 
  )
}
