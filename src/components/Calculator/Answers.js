import React from 'react'

import * as util from '../Util.js'


const Answers = props => {
    let grossIncome = props.grossIncome
    let deductions = props.deductions
    let exemptions = props.exemptions
    let before = props.before
    let after = props.after

    let agi = util.adjustedGrossIncome(grossIncome, deductions, exemptions)
    let taxableIncome = util.taxableIncome(grossIncome, before, deductions, exemptions)
    let fica = util.ficaTaxes(grossIncome, .062, 0.0145)
    let fedTaxes = util.fedTaxes(taxableIncome)
    let stateTaxes = util.stateTaxes(taxableIncome)
    let retirementAmount = +before + +after
    let taxAmount = fedTaxes + stateTaxes
    let discretionaryAmount = grossIncome - retirementAmount - taxAmount

    return (
        <div className='container'>
            <div className='columns'>
                <div className='column'>Your adjusted gross income</div>
                <div className='column'>{agi}</div>
            </div>
            <div className='columns'>
                <div className='column'>Your taxable income</div>
                <div className='column'>{taxableIncome}</div>
            </div>
            <div className='columns'>
                <div className='column'>FICA tax</div>
                <div className='column'>{fica}</div>
            </div>
            <div className='columns'>
                <div className='column'>Federal income tax</div>
                <div className='column'>{fedTaxes}</div>
            </div>
            <div className='columns'>
                <div className='column'>State income tax</div>
                <div className='column'>{stateTaxes}</div>
            </div>
            <div className='columns'>
                <div className='column'><strong>Total taxes</strong></div>
                <div className='column'><strong>{taxAmount}</strong></div>
            </div>
            <div className='columns'>
                <div className='column'><strong>Total savings</strong></div>
                <div className='column'><strong>{retirementAmount}</strong></div>
            </div>
            <div className='columns'>
                <div className='column'><strong>Total spending</strong></div>
                <div className='column'><strong>{discretionaryAmount}</strong></div>
            </div>
        </div>
    )
}


export default Answers
