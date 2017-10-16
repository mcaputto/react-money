import React from 'react'


const MoneyInput = props =>
    <p className='control has-icons-left'>
        <span className='icon is-small is-left'>
            <i className='fa fa-money'></i>
        </span>
        <Input {...props} />
    </p>

const TitleField = props =>
    <label className='label'>
        {props.bulmaTitle}
    </label>

const DescriptionField = props =>
    <p className='help'>
        {props.bulmaDescription}
    </p>

const Input = props =>
    <input
        name={props.controlledName}
        type={props.controlledType}
        value={props.controlledValue}
        onChange={props.controlledOnChange}
        className='input is primary'
    />

const ControlledInput = props =>
    <div className='field'>
        <TitleField {...props} />
        <MoneyInput {...props} />
        <DescriptionField {...props} />
    </div>


export default ControlledInput
