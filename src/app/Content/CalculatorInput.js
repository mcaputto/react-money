import React from 'react'


const BulmaInput = props =>
    <input
        className='input is primary'
        name={props.controlledName}
        type={props.controlledType}
        value={props.controlledValue}
        onChange={props.controlledOnChange}
    />

const BulmaTitleField = props =>
    <label className='label'>
        {props.bulmaTitle}
    </label>

const BulmaMoneyInput = props =>
    <p className='control has-icons-left'>
        <span className='icon is-small is-left'>
            <i className='fa fa-money'></i>
        </span>
        <BulmaInput {...props} />
    </p>

const BulmaDescriptionField = props =>
    <p className='help'>
        {props.bulmaDescription}
    </p>

const ControlledInput = props =>
    <div className='field'>
        <BulmaTitleField {...props} />
        <BulmaMoneyInput {...props} />
        <BulmaDescriptionField {...props} />
    </div>


export default ControlledInput