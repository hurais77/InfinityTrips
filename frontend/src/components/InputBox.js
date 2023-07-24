import React from 'react';

export default function InputBox(props) {
  const change = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div style={{ width: '60vh' }} className='form-outline mb-4'>
      <input
        type={props.type}
        id={props.type}
        className='form-control'
        placeholder={props.placeholder}
        onChange={change}
        required
      />
    </div>
  );
}
