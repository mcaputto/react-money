import React, { Component } from 'react'

import Questions from '../components/Questions'
import Answers from '../components/Answers'


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
                <p className='title is-3'>Your personal variables</p>
                <Questions
                    grossIncome={this.state.grossIncome}
                    before={this.state.before}
                    after={this.state.after}
                    deductions={this.state.deductions}
                    exemptions={this.state.exemptions}
                    onChange={this.onChange}
                />
                <p className='title is-3'>Your predicted metrics</p>
                <Answers
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
