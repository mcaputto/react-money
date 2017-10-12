// TODO: validateInput() -> only accept positive values

import React, { Component } from 'react'

const Header = () => [
    <h1 className='title is-1'>Simple finance</h1>,
    <p className='subtitle is-1'>A financial calculator for the rest of us</p>,
    <p>Hi, I'm a computer program running in your browser. All calculations are being performed client-side using your browser's JavaScript interpreter. Absolutely no data is being stored online. In fact, you could turn off your internet connection, right now, without any interruptions to my functionality. I'm here to help you learn about your finances... please fill out the text forms below to see what I can do!</p>,
    <br/>,
]

const ControlledInput = (props) => (
    <div className='field'>
        <label className='label'>{props.bulmaTitle}</label>
        <div className='control has-icons-left'>
            <span className='icon is-small is-left'>
                <i className='fa fa-money'></i>
            </span>
            <div className='field'>
                <input
                    name={props.controlledName}
                    type={props.controlledType}
                    value={props.controlledValue}
                    onChange={props.controlledOnChange}
                    className='input is primary'
                />
            </div>
        </div>
        <p className='help'>{props.bulmaDescription}</p>
    </div>

)

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      earnings : '',
      before : '',
      after: '',
      deductions: '',
      exemptions: '',
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    let newText = e.target.value
    this.setState({[e.target.name] : newText})
  }
  render() {
    return (
        <div className='columns'>
            <div className='column'>
                <ControlledInput
                    controlledName='earnings'
                    controlledType='text'
                    controlledValue={this.state.earnings}
                    controlledOnChange={this.onChange}
                    bulmaTitle='Earnings'
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
    )
  }
}

const Results = () => [
    <h2 className='title is-2'>Your predicted metrics</h2>,
    <p>According to my super smart computer brain...</p>,
    <br/>,
    <ul>
        <li>Your <strong>gross income</strong> is: </li>
        <li>Your <strong>adjusted gross income</strong> is: </li>
        <li>Your <strong>taxable income</strong> is: </li>
        <br/>
        <li>Your <strong>FICA tax expense</strong> is:</li>
        <li>Your <strong>federal income tax expense</strong> is:</li>
        <li>Your <strong>state income tax expense</strong> is:</li>
        <br/>
        <li>Your <strong>effective FICA tax rate</strong> is:</li>
        <li>Your <strong>effective federal income tax rate</strong> is:</li>
        <li>Your <strong>effective state income tax rate</strong> is:</li>
        <br/>
        <li>Your <strong>net income spend percentage</strong> is:</li>
        <li>Your <strong>net income save percentage</strong> is:</li>
        <li>Your <strong>net income tax percentage</strong> is:</li>
        <br/>
        <li>Your <strong>gross income spend percentage</strong> is:</li>
        <li>Your <strong>gross income save percentage</strong> is:</li>
    </ul>,
]

const Body = () => [
    <Form />,
    <Results />,
]

const Footer = () =>
    <footer className='footer'>
        <div className='container'>
            <div className='content has-text-centered'>
                <p><strong>Simple finance</strong> by <a href='https://github.com/mcaputto'>mcto</a></p>
            </div>
        </div>
    </footer>

class App extends Component {
    render() {
        return [
            <Header />,
            <h2 className='title is-2'>Your variables</h2>,
            <Body />,
            <Footer />,
        ]
    }
}

export default App
