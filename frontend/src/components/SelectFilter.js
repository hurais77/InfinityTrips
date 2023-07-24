import React from 'react'

export default function SelectFilter(props) {

  return (
    <select id={props.filter.toLowerCase()} className="btn btn-outline-dark btn-md-2 col-lg-2 m-3" onChange={props.onchange} defaultValue={'DEFAULT'} >
   <option value={''}>{props.filter}</option>
   {props.options.map((option)=>
   (
    <option key={option} value={option}>{option}</option>
   ))
   }
</select>
  )
}
