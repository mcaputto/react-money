import React, { Component } from 'react'


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

const Input = props =>
    <input
        name={props.controlledName}
        type={props.controlledType}
        value={props.controlledValue}
        onChange={props.controlledOnChange}
        className='input is primary'
    />

const ControlledInput = props =>
    <div className='field'>
        <TitleField {...props} />
        <MoneyInput {...props} />
        <DescriptionField {...props} />
    </div>

class Body extends Component {
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
                <p className='title is-3'>Your personal variables</p>
                <div className='columns'>
                    <div className='column'>
                        <ControlledInput
                            controlledName='grossIncome'
                            controlledType='text'
                            controlledValue={this.state.grossIncome}
                            controlledOnChange={this.onChange}
                            bulmaTitle='Gross income'
                            bulmaDescription='Include all wages, salaries, tips, bonuses, etc.'
                        />
                    </div>
                    <div className='column'>
                        <ControlledInput
                            controlledName='before'
                            controlledType='text'
                            controlledValue={this.state.before}
                            controlledOnChange={this.onChange}
                            bulmaTitle='Tax deferred'
                            bulmaDescription='401(a), 401(k), 403(b), 457, 529, HSA, IRA, TSP, etc. '
                        />
                    </div>
                    <div className='column'>
                        <ControlledInput
                            controlledName='after'
                            controlledType='text'
                            controlledValue={this.state.after}
                            controlledOnChange={this.onChange}
                            bulmaTitle='Savings'
                            bulmaDescription='Roth 401(k), Roth 403(b), Roth 457(b), Roth IRA, etc.'
                        />
                    </div>
                    <div className='column'>
                        <ControlledInput
                            controlledName='deductions'
                            controlledType='text'
                            controlledValue={this.state.deductions}
                            controlledOnChange={this.onChange}
                            bulmaTitle='Deductions'
                            bulmaDescription='$6,350 single, $9,350 head of household, $12,700 married'
                        />
                    </div>
                    <div className='column'>
                        <ControlledInput
                            controlledName='exemptions'
                            controlledType='text'
                            controlledValue={this.state.exemptions}
                            controlledOnChange={this.onChange}
                            bulmaTitle='Exemptions'
                            bulmaDescription='$4,050'
                        />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <p className='title is-3'>Your predicted metrics</p>
                        <p>Your <strong>adjusted gross income</strong> is <span className="is-size-3">{this.state.grossIncome - this.state.deductions - this.state.exemptions}</span> and your <strong>taxable income</strong> is <span className="is-size-3">{this.state.grossIncome - this.state.deductions - this.state.exemptions - this.state.before}</span>.</p>
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
        )
    }
}

export default Body
