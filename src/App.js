import React, { Component } from 'react'
import PropTypes from 'prop-types'

const userInputsData = {
  earnings: {
    name: 'Earnings',
    description: 'Total cash compensation',
  },
  before: {
    name: 'Before-tax investments',
    description: 'Max out that 401k!',
  },
  after: {
    name: 'After-tax investments',
    description: 'Max out that Roth IRA!',
  },
  deductions: {
    name: 'Deductions',
    description: 'Default is $6,350',
  },
  exemptions: {
    name: 'Exemptions',
    description: 'Default is $4,050',
  },
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleEarningsChange = this.handleEarningsChange.bind(this)
    this.handlePreChange = this.handlePreChange.bind(this)
    this.handleAfterChange = this.handleAfterChange.bind(this)
    this.handleEarningsChange = this.handleEarningsChange.bind(this)
    this.handleEarningsChange = this.handleEarningsChange.bind(this)
    this.state = {
      earnings: '',
      before: '',
      after: '',
      deductions: '',
      exemptions: '',
      agi: '',
    }
  }

  handleEarningsChange(earnings) {
    this.setState({earnings})
  }
  handlePreChange(before) {
    this.setState({before})
  }
  handleAfterChange(after) {
    this.setState({after})
  }
  handleDeductionsChange(deductions) {
    this.setState({deductions})
  }
  handleExemptionsChange(exemptions) {
    this.setState({exemptions})
  }

  render() {
    const earnings = this.state.earnings
    const before = this.state.before
    const after = this.state.after
    const deductions = this.state.deductions
    const exemptions = this.state.exemptions

    const agi = earnings - deductions - exemptions

    return [
      <div className="column is-one-third">
        <h2 className="title is-2">The basics</h2>
        <ValueInput
          name={userInputsData.earnings.name}
          description={userInputsData.earnings.description}
          onPropChange={this.handleEarningsChange}
        />
        <ValueInput
          name={userInputsData.before.name}
          description={userInputsData.before.description}
          onPropChange={this.handlePreChange}
        />
        <ValueInput
          name={userInputsData.after.name}
          description={userInputsData.after.description}
          onPropChange={this.handleAfterChange}
        />
        <ValueInput
          name={userInputsData.deductions.name}
          description={userInputsData.deductions.description}
          onPropChange={this.handleDeductionsChange}
        />
        <ValueInput
          name={userInputsData.exemptions.name}
          description={userInputsData.exemptions.description}
          onPropChange={this.handleExemptionsChange}
        />
      </div>,
      <div className="column">
        <h2 className="title is-2">Your results</h2>
        <p>According to my super smart computer brain...</p>
        <br/>
        <ul>
          <li>Your <strong>gross income</strong> is:&nbsp;</li>
          <li>Your <strong>adjusted gross income</strong> is:&nbsp;</li>
          <li>Your <strong>taxable income</strong> is:&nbsp;</li>
          <br/>
          <li>Your <strong>FICA tax expense</strong> is:&nbsp;</li>
          <li>Your <strong>federal income tax expense</strong> is:&nbsp;</li>
          <li>Your <strong>state income tax expense</strong> is:&nbsp;</li>
          <br/>
          <li>Your <strong>effective FICA tax rate</strong> is:&nbsp;</li>
          <li>Your <strong>effective federal income tax rate</strong> is:&nbsp;</li>
          <li>Your <strong>effective state income tax rate</strong> is:&nbsp;</li>
          <br/>
          <li>Your <strong>net income spend percentage</strong> is:&nbsp;</li>
          <li>Your <strong>net income save percentage</strong> is:&nbsp;</li>
          <li>Your <strong>net income tax percentage</strong> is:&nbsp;</li>
          <br/>
          <li>Your <strong>gross income spend percentage</strong> is:&nbsp;</li>
          <li>Your <strong>gross income save percentage</strong> is:&nbsp;</li>
        </ul>
      </div>,
    ]
  }
}

// TODO: validateInput() -> only accept positive values
class ValueInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onPropChange(e.target.value)
  }

  render() {
    const value = this.props.value

    return (
      <div className='field'>
        <label className='label'>{this.props.name}</label>
        <div className='control has-icons-left'>
        <span className='icon is-small is-left'><i className='fa fa-money'></i></span>
          <input className='input is primary'
            placeholder='Enter your value here...'
            type='number'
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <p className='help'>{this.props.description}</p>
      </div>
    )
  }
}

// TODO: reimplement this...
const generateUserInputRows = () => Object.keys(userInputsData).map(key => (
  <ValueInput
    key={key}
    name={userInputsData[key].name}
    description={userInputsData[key].description}
    onPropChange={this.handlePropChange}
  />
))

// Warnings ignored due to https://reactjs.org/blog/2017/09/26/react-v16.0.html
class App extends Component {
  render() {
    return [
      <h1 className='title is-1'>Simple finance</h1>,
      <p className='subtitle is-1'>A financial calculator for the rest of us</p>,
      <p>Hi, I'm a computer program running in your browser. All calculations are being performed client-side using your browser's JavaScript interpreter. Absolutely no data is being stored online. In fact, you could turn off your internet connection, right now, without any interruptions to my functionality. I'm here to help you learn about your finances... please fill out the text forms below to see what I can do!</p>,
      <p><br/></p>,
      <div className="columns">
        <Calculator />
      </div>,
      <footer className='footer'>
        <div className='container'>
          <div className='content has-text-centered'>
            <p><strong>Simple finance</strong></p>
            <p>Made by <a href='https://github.com/mcaputto'>mcto</a></p>
            <a href='https://nodejs.org/en/'>Node</a><br/>
            <a href='https://www.npmjs.com'>NPM</a><br/>
            <a href='https://yarnpkg.com/en/'>Yarn</a><br/>
            <a href='https://webpack.github.io/'>Webpack</a><br/>
            <a href='https://reactjs.org'>React</a><br/>
            <a href='http://babeljs.io'>Babel</a><br/>
            <a href='http://www.ecma-international.org/ecma-262/6.0/index.html'>ES6</a><br/>
            <a href='https://eslint.org'>ESLint</a><br/>
          </div>
        </div>
      </footer>,
    ]
  }
}

export default App
