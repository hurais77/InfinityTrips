import React from 'react'
import HotelContext from '../store/hotel-context'
export default function Button(props) {
  return (
    
    <button
                className='btn btn-primary'
                style={{
                  backgroundColor: 'rgba(0,0,0,0)',
                  border: '5px solid aqua',
                  color: 'black',
                  width: '30vh',
                }}
                onClick={props.onclick}
              >
                {props.text}
              </button>
      
  )
}
