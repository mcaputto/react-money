import React from 'react';

import ControlledInput from '../components/Input'

const Form = props =>
    <div>
        <p className='title is-3'>Your personal variables</p>
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
        <div className="columns">
            <div className="column">
                <p className='title is-3'>Your predicted metrics</p>
                <p>Your <strong>adjusted gross income</strong> is <span className="is-size-3">{props.grossIncome - props.deductions - props.exemptions}</span> and your <strong>taxable income</strong> is <span className="is-size-3">{props.grossIncome - props.deductions - props.exemptions - props.before}</span>.</p>
                <br/>
                <p className="subtitle is-4">Gross income</p>
                <p>As a percentage of your gross income, you paid <span className="is-size-3">0</span> in taxes, saved <span className="is-size-3">0</span>, and spent <span className="is-size-3">0</span>.</p>
                <br/>
                <p className="subtitle is-4">Net income</p>
                <p>As a percentage of your net income, you saved <span className="is-size-3">0</span> and spent <span className="is-size-3">0</span>.</p>
                <br/>
            </div>
        </div>
    </div>

export default Form
