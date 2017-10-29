import React, { Component } from 'react'

import ControlledInput from './ControlledInput'

import * as util from './Util.js'


const CalculatorQuestions = props =>
    <div className='container'>
        <div className='content'>
            <h1 className='title'>
                Your parameters
            </h1>
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
        </div>
    </div>


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
                    Your findings
                </h1>
                <p>
                    Based on the information you provided, your <strong>adjusted gross income</strong> is {_agi} and your <strong>taxable income</strong> is {_taxableIncome}. You will pay <strong>FICA taxes</strong> of {_fica}, <strong>federal income taxes</strong> of {_fedTaxes}, and <strong>state income taxes</strong> of {_stateTaxes}. The <strong>total taxes</strong> you will pay are {_taxAmount}. Of the remaining money, you have indicated that you will <strong>save</strong> {_retirementAmount}, which leaves <strong>discretionary spending</strong> of {_discretionaryAmount}.
                </p>
            </div>
        </div>
    )
}


class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grossIncome : '',
            before : '',
            after: '',
            deductions: '',
            exemptions: '',
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        let newValue = e.target.value
        this.setState({[e.target.name] : newValue})
    }
    render() {
        return (
            <div>
                <CalculatorQuestions
                    grossIncome={this.state.grossIncome}
                    before={this.state.before}
                    after={this.state.after}
                    deductions={this.state.deductions}
                    exemptions={this.state.exemptions}
                    onChange={this.onChange}
                />
                <hr/>
                <CalculatorAnswers
                    grossIncome={this.state.grossIncome}
                    before={this.state.before}
                    after={this.state.after}
                    deductions={this.state.deductions}
                    exemptions={this.state.exemptions}
                />
            </div>
        );
    }
}


export default Calculator
