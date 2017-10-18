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

    let _agi = util.formatter.format(agi)
    let _taxableIncome = util.formatter.format(taxableIncome)
    let _fica = util.formatter.format(fica)
    let _fedTaxes = util.formatter.format(fedTaxes)
    let _stateTaxes = util.formatter.format(stateTaxes)
    let _retirementAmount = util.formatter.format(retirementAmount)
    let _taxAmount = util.formatter.format(taxAmount)
    let _discretionaryAmount = util.formatter.format(discretionaryAmount)

    return (
        <div>
            <div className='columns'>
                <div className='column'>Your adjusted gross income</div>
                <div className='column'>{_agi}</div>
            </div>
            <div className='columns'>
                <div className='column'>Your taxable income</div>
                <div className='column'>{_taxableIncome}</div>
            </div>
            <div className='columns'>
                <div className='column'>FICA tax</div>
                <div className='column'>{_fica}</div>
            </div>
            <div className='columns'>
                <div className='column'>Federal income tax</div>
                <div className='column'>{_fedTaxes}</div>
            </div>
            <div className='columns'>
                <div className='column'>State income tax</div>
                <div className='column'>{_stateTaxes}</div>
            </div>
            <div className='columns'>
                <div className='column'><strong>Total taxes</strong></div>
                <div className='column'><strong>{_taxAmount}</strong></div>
            </div>
            <div className='columns'>
                <div className='column'><strong>Total savings</strong></div>
                <div className='column'><strong>{_retirementAmount}</strong></div>
            </div>
            <div className='columns'>
                <div className='column'><strong>Total spending</strong></div>
                <div className='column'><strong>{_discretionaryAmount}</strong></div>
            </div>
        </div>
    )
}

export default Answers
