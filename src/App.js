// TODO: validateInput() -> only accept positive values

import React, { Component } from 'react'

const userInputsData = {
  earnings: {
    title: 'Earnings',
    description: 'Include all cash compensation',
  },
  before: {
    title: 'Before-tax savings',
    description: '401(a), 401(k), 403(b), 457, 529, HSA, IRA, TSP, etc. ',
  },
  after: {
    title: 'After-tax savings',
    description: 'Roth 401(k), Roth 403(b), Roth 457(b), Roth IRA, and everything else',
  },
  deductions: {
    title: 'Deductions',
    description: 'Standard is $6,350 for single and for married filing separately, $9,350 head of household, and $12,700 for married filing jointly and for qualifying surviving spouse'
  },
  exemptions: {
    title: 'Exemptions',
    description: 'Total possible is $4,050 per person',
  },
}

const Forms = () => Object.keys(userInputsData).map(key => (
  <Form
    key={key}
    title={userInputsData[key].title}
    description={userInputsData[key].description}
  />
))

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      amount: ''
    }
  }

  handleInputChange(event) {
    this.setState({
      amount: event.target.value
    })
  }

  render() {
    const placeholder = 'Enter here...'
    const title = this.props.title
    const description = this.props.description
    const handleInputChange=this.handleInputChange

    return (
      <div className='field'>
        <label className='label'>{title}</label>
        <div className='control has-icons-left'>
        <span className='icon is-small is-left'><i className='fa fa-money'></i></span>
          <input className='input is primary'
            placeholder={placeholder}
            type='number'
            value={this.state.amount}
            onChange={handleInputChange}/>
        </div>
        <p className='help'>{description}</p>
      </div>
    )
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: '',
    }
  }

  handleChange(value) {
    this.setState({value})
  }

  render() {
    return [
      <div className="column is-one-third">
        <h2 className="title is-2">The basics</h2>
        <Forms />
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
