import React from 'react'

import * as util from '../Util.js'

const AGI = props => util.adjustedGrossIncome(props.grossIncome, props.deductions, props.exemptions)
const TI = props => util.taxable(props.grossIncome, props.before, props.deductions, props.exemptions)
const Fica = props => util.ficaTaxes(props.grossIncome, .062, 0.0145)

const Answers = props =>
    <div className='section'>
        <h1 className='title'>Your predicted metrics</h1>
        <div className='columns'>
            <div className='column'>Your adjusted gross income</div>
            <div className='column'><AGI {...props} /></div>
        </div>
        <div className='columns'>
            <div className='column'>Your taxable income</div>
            <div className='column'><TI {...props} /></div>
        </div>
        <div className='columns'>
            <div className='column'>FICA taxes due</div>
            <div className='column'><Fica {...props} /></div>
        </div>
        <div className='columns'>
            <div className='column'>Federal income tax due</div>
            <div className='column'>TODO</div>
        </div>
        <div className='columns'>
            <div className='column'>State income tax due</div>
            <div className='column'>TODO</div>
        </div>
        <div className='columns'>
            <div className='column'>Retirement savings</div>
            <div className='column'>TODO</div>
        </div>
        <div className='columns'>
            <div className='column'>Discretionary spending</div>
            <div className='column'>TODO</div>
        </div>
    </div>


export default Answers
