import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroudImage from '../components/BackgroudImage'
import bg from '../assets/images/login_bg.png'
import NavBar from '../components/NavBar'
import DateField from '../components/DateField'
import HotelContext from '../store/hotel-context'
import PaymentContext from '../store/payment-context'

export default function Checkout() {
    const [hotel,setHotel] = useContext(HotelContext);
    const [payments, setPayments] = useContext(PaymentContext)
    const navigate = useNavigate()
    const nums = Array.from(Array(20).keys())

  const payment = (event) => {
    event.preventDefault()
    const checkindate = new Date(event.target.form.checkin.value)
    const checkoutdate = new Date(event.target.form.checkout.value)
    const days = (checkoutdate.getTime() - checkindate.getTime()) / (1000 * 3600 * 24);
    let price=0
    if (hotel.type === 'Hotel')
    {
      const no_of_rooms = event.target.form.rooms.value
      const room_price = hotel.room_price
      price = days*room_price*no_of_rooms
    }
    else
    {
      const no_of_adults = event.target.form.adults.value
      const type = event.target.form.type.value
      let price = 0
      if(type==='AC')
        price = days*hotel.ac_bed_price*no_of_adults
      else
        price = days*hotel.non_ac_bed_price*no_of_adults
    }
    setPayments({'hotel':hotel,'price':price,'days':days})
    navigate('/payment')


  }
  return (
    <BackgroudImage image={bg}>
        <NavBar/>
        <div className="m-5 w-50">
        <form>
  
  <DateField name='Check-In Date' id='checkin'/>
  <DateField name='Check-Out Date' id='checkout'/>
  <div className="form-group row mt-3">
    <label htmlFor="Select" className="col-md-4 col-form-label"><b>No of Adults</b></label>

      <select id='adults' className="btn btn-light col-md-4 ">
        {nums.map((num)=>
        (
            <option key={num} value={num}>{num}</option>
        ))}
      </select>
            </div>
            {hotel.type === 'Hotel' && 
    <div className="form-group row mt-3">
    <label htmlFor="Select" className="col-md-4 col-form-label"><b>No of Rooms</b></label>

      <select id='rooms' className="btn btn-light col-md-4 ">
        {nums.map((num)=>
        (
            <option key={num}  value={num}>{num}</option>
        ))}
      </select>
      </div>
}
    {hotel.type === 'Hostel' && 
    <div className="form-group row mt-3">
    <label htmlFor="Type" className="col-md-4 col-form-label"><b>Bed Type</b></label>
    <div className="form-check col-lg-2 mt-2">
  <input className="form-check-input" type="radio" name="type" id="type" value='AC'/>
  <label className="form-check-label" htmlFor="AC">
    <b>AC</b>
  </label></div>
  <div className="form-check col-lg-2 mt-2">
  <input className="form-check-input" type="radio"  name="type" id="type" value='Non-AC'/>
  <label className="form-check-label" htmlFor="Non-AC">
  <b>Non AC</b>
  </label></div>
</div> 
    }
  <center className="col-12 mt-3 center">
    <button className="btn btn-dark" type="submit" onClick={payment}>Book</button>
  </center>
  </form>

        </div>
        
    </BackgroudImage>
  )
}
