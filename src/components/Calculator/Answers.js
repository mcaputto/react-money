import React from 'react'

import * as util from '../Util.js'

const AGI = props => util.adjustedGrossIncome(props.grossIncome, props.deductions, props.exemptions)
const TI = props => util.taxable(props.grossIncome, props.before, props.deductions, props.exemptions)

const Answers = props =>
    <div>
        <div className='columns'>
            <div className='column'>Your <strong>adjusted gross income</strong> is</div>
            <div className='column'><AGI {...props} /></div>
        </div>
        <div className='columns'>
            <div className='column'>Your <strong>taxable income</strong> is</div>
            <div className='column'>  <TI {...props} /></div>
        </div>
        <div className='columns'>
            <div className='column'>As a percentage of your gross income, you were taxed</div>
            <div className='column'>0</div>
        </div>
        <div className='columns'>
            <div className='column'>As a percentage of your gross income, you saved</div>
            <div className='column'>0</div>
        </div>
        <div className='columns'>
            <div className='column'>As a percentage of your gross income, you spent</div>
            <div className='column'>0</div>
        </div>
        <div className='columns'>
            <div className='column'>As a percentage of your net income, you saved</div>
            <div className='column'>0</div>
        </div>
        <div className='columns'>
            <div className='column'>As a percentage of your net income, yasdfasdou spent</div>
            <div className='column'>0</div>
        </div>
    </div>

export default Answers
