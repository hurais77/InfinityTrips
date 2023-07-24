import React, { useContext, useState } from 'react'
import '../assets/css/Payment.css'
import PaymentContext from '../store/payment-context'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'

export default function Payment() {
    const [payments, setPayments] = useContext(PaymentContext)
    const [success, showSuccess] = useState(false)
    const navigate = useNavigate()
    console.log(payments.hotel.name)
    
    const confirmPayment = () =>
    {
        showSuccess(!success)
    }
    const goHome = () =>
    {
        navigate('/')
    }
  return (
    
    <div >{success && <div className='container text-light bg-success text-center ind' style={{position:'absolute', marginTop:'40vh', marginLeft:'30vh'}}><center><h3>Payment Successfull!</h3></center>
    <button className='btn btn-light auto' onClick={goHome}>Home</button>
    </div>}
    <NavBar/>
    
   {!success && <div className="row payment mt-5">
  <div className="col-75">
    <div className="container">
    <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname"/>
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email"/>
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" />
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city"/>

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" />
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            
            <label htmlFor="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" />
            <label htmlFor="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" />
            <label htmlFor="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" />
            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" />
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv"/>
              </div>
            </div>
            </div>
            <label>Shipping address same as billing address {' '}
          <input type="checkbox" name="sameadr"/>
        </label>
        <button className="paybtn" onClick={confirmPayment}>Confirm Payment</button>
            </div>
            </div></div>
            <div className="col-25">
    <div className="container">
      <h4>Price <span className="price" style={{"color":"black"}}></span></h4>
      <p>Hotel Name<span className="price">{payments.hotel.name}</span></p>
      <p>No of Days<span className="price">{payments.days}</span></p>
      <p>City<span className="price">{payments.hotel.city}</span></p>
      <p>Type<span className="price">{payments.hotel.type}</span></p>
      
      <p>Price <span className="price" style={{"color":"black"}}><b>{payments.price}</b></span></p>
    
  </div> </div> </div> }
  </div>
  
            
  )
}
