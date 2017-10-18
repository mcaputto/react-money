import React from 'react'

import ControlledInput from '../Calculator/Input'


const introduction =
    <p>
        Hi, I'm a computer program running in your browser. All calculations
        are being performed client-side using your browser's JavaScript
        interpreter. Absolutely no data is being stored online. In fact, you
        could turn off your internet connection, right now, without any
        interruptions to my functionality. I'm here to help you learn about
        your finances... please fill out the text forms below to see what I can
        do!
        <br/>
        <br/>
    </p>


const Questions = props =>
    <div className='container'>
        {introduction}
        <div className='columns'>
            <div className='column'>
                <ControlledInput
                    controlledName='grossIncome'
                    controlledType='number'
                    controlledValue={props.grossIncome}
                    controlledOnChange={props.onChange}
                    bulmaTitle='Gross income'
                    bulmaDescription='Include all wages, salaries, tips, bonuses, etc.'
                />
            </div>
            <div className='column'>
                <ControlledInput
                    controlledName='before'
                    controlledType='number'
                    controlledValue={props.before}
                    controlledOnChange={props.onChange}
                    bulmaTitle='Tax deferred'
                    bulmaDescription='401(a), 401(k), 403(b), 457, 529, HSA, IRA, TSP, etc. '
                />
            </div>
            <div className='column'>
                <ControlledInput
                    controlledName='after'
                    controlledType='number'
                    controlledValue={props.after}
                    controlledOnChange={props.onChange}
                    bulmaTitle='Savings'
                    bulmaDescription='Roth 401(k), Roth 403(b), Roth 457(b), Roth IRA, etc.'
                />
            </div>
            <div className='column'>
                <ControlledInput
                    controlledName='deductions'
                    controlledType='number'
                    controlledValue={props.deductions}
                    controlledOnChange={props.onChange}
                    bulmaTitle='Deductions'
                    bulmaDescription='$6,350 single, $9,350 head of household, $12,700 married'
                />
            </div>
            <div className='column'>
                <ControlledInput
                    controlledName='exemptions'
                    controlledType='number'
                    controlledValue={props.exemptions}
                    controlledOnChange={props.onChange}
                    bulmaTitle='Exemptions'
                    bulmaDescription='$4,050'
                />
            </div>
        </div>
        <br/>
    </div>


export default Questions
