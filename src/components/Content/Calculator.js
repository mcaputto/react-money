import React, { Component } from 'react'

import Questions from './Questions'
import Answers from './Answers'


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
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Tell me a few basic things
                    </h1>
                    <Questions
                        grossIncome={this.state.grossIncome}
                        before={this.state.before}
                        after={this.state.after}
                        deductions={this.state.deductions}
                        exemptions={this.state.exemptions}
                        onChange={this.onChange}
                    />
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Here is what I found out
                    </h1>
                    <Answers
                        grossIncome={this.state.grossIncome}
                        before={this.state.before}
                        after={this.state.after}
                        deductions={this.state.deductions}
                        exemptions={this.state.exemptions}
                    />
                </div>
            </section>
            </div>
        );
    }
}


export default Calculator
