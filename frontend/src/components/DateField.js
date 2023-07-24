import React from 'react'

export default function DateField(props) {
  return (
    <div className="form-group row mt-3">
    <label htmlFor="checkIn" className="col-md-4 col-form-label"><b>{props.name}</b></label>
    <div className="col-md-4">
      <input type="date" className="form-control" id={props.id} name={props.id} />
    </div>
    </div>
  )
}
