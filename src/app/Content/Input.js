import React from 'react'


const Input = props =>
    <input
        name={props.controlledName}
        type={props.controlledType}
        value={props.controlledValue}
        onChange={props.controlledOnChange}
        className='input is primary'
    />

export default Input
