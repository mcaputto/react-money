import React, { Component } from 'react'

import CalculatorQuestions from './CalculatorQuestions'
import CalculatorAnswers from './CalculatorAnswers'


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
