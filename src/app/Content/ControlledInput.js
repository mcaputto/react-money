import React from 'react'

import Input from './Input'

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

const ControlledInput = props =>
    <div className='field'>
        <TitleField {...props} />
        <MoneyInput {...props} />
        <DescriptionField {...props} />
    </div>


export default ControlledInput