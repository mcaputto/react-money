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
        <section className='section'>
            <div className='container'>
                <h1 className='title'>
                    My findings
                </h1>
                <ul>
                    <li>
                        Your adjusted gross income {_agi}
                    </li>
                    <li>
                        Your taxable income {_taxableIncome}
                    </li>
                    <li>
                        FICA tax {_fica}
                    </li>
                    <li>
                        Federal income tax {_fedTaxes}
                    </li>
                    <li>
                        State income tax {_stateTaxes}
                    </li>
                    <li>
                        Total taxes {_taxAmount}
                    </li>
                    <li>
                        Total savings {_retirementAmount}
                    </li>
                    <li>
                        Total spending {_discretionaryAmount}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CalculatorAnswers
