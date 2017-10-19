import React from 'react'

import * as util from './Util.js'


const CalculatorAnswers = props => {
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
        <div className='container'>
            <div className='content'>
                <h1 className='title'>
                    My findings
                </h1>
                <p>
                    Based on the information you provided, your <strong>adjusted gross income</strong> is {_agi} and your <strong>taxable income</strong> is {_taxableIncome}. You will pay <strong>FICA taxes</strong> of {_fica}, <strong>federal income taxes</strong> of {_fedTaxes}, and <strong>state income taxes</strong> of {_stateTaxes}. The <strong>total taxes</strong> you will pay is {_taxAmount}. Of the remaining money, you have indicated that you will <strong>save</strong> {_retirementAmount}, which leaves a <strong>discretionary spending</strong> of {_discretionaryAmount}.
                </p>
            </div>
        </div>
    )
}

export default CalculatorAnswers
