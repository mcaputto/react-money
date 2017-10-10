// TODO: validateInput() -> only accept positive values

import React, { Component } from 'react'

const userInputsData = {
  earnings: {
    title: 'Earnings',
    description: 'Include all cash compensation.',
  },
  before: {
    title: 'Before-tax savings',
    description: '401(a), 401(k), 403(b), 457, 529, HSA, IRA, TSP, etc. ',
  },
  after: {
    title: 'After-tax savings',
    description: 'Roth 401(k), Roth 403(b), Roth 457(b), Roth IRA, taxable brokerage accounts, etc.',
  },
  deductions: {
    title: 'Deductions',
    description: 'Standard is $6,350 for single and for married filing separately, $9,350 head of household, and $12,700 for married filing jointly and for qualifying surviving spouse.'
  },
  exemptions: {
    title: 'Exemptions',
    description: 'Personal exemption is $4,050.',
  },
}

class Form extends Component {
  onChange = (e) => {
    this.setState({value: e.target.value});
    this.props.onChange(e.target.value);
  };

  render() {
    const placeholder = 'Enter here...'

    return (
      <div className='field'>
        <label className='label'>{this.props.title}</label>
        <div className='control has-icons-left'>
        <span className='icon is-small is-left'><i className='fa fa-money'></i></span>
          <input className='input is primary'
            name='amount'
            type='number'
            placeholder={placeholder}
            value={this.props.propsValue}
            onChange={this.onChange}
          />
        </div>
        <p className='help'>{this.props.description}</p>
      </div>
    )
  }
}

// const Forms = () => Object.keys(userInputsData).map(key => (
//   <Form
//     key={key}
//     title={userInputsData[key].title}
//     description={userInputsData[key].description}
//   />
// ))

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      earnings: '',
      before: '',
      after: '',
      deductions: '',
      exemptions: '',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // todo
  }

  _handleEarningsChange = (value) => {
    this.setState({earnings: value})
  }
  _handleBeforeChange = (value) => {
    this.setState({before: value})
  }
  _handleAfterChange = (value) => {
    this.setState({after: value})
  }
  _handleDeductionsChange = (value) => {
    this.setState({deductions: value})
  }
  _handleExemptionsChange = (value) => {
    this.setState({exemptions: value})
  }

  render() {
    return [
      <div className="column is-one-third">
        <h2 className="title is-2">Situation</h2>
        <Form
          title={userInputsData['earnings'].title}
          description={userInputsData['earnings'].description}
          propsValue={this.state.earnings}
          onChange={this._handleEarningsChange}
        />
        <Form
          title={userInputsData['before'].title}
          description={userInputsData['before'].description}
          propsValue={this.state.before}
          onChange={this._handleBeforeChange}
        />
        <Form
          title={userInputsData['after'].title}
          description={userInputsData['after'].description}
          propsValue={this.state.after}
          onChange={this._handleAfterChange}
        />
        <Form
          title={userInputsData['deductions'].title}
          description={userInputsData['deductions'].description}
          propsValue={this.state.deductions}
          onChange={this._handleDeductionsChange}
        />
        <Form
          title={userInputsData['exemptions'].title}
          description={userInputsData['exemptions'].description}
          propsValue={this.state.exemptions}
          onChange={this._handleExemptionsChange}
        />
      </div>,
      <div className="column">
        <h2 className="title is-2">Outcome</h2>
        <p>According to my super smart computer brain...</p>
        <br/>
        <ul>
          <li>Your <strong>gross income</strong> is: {this.state.earnings}</li>
          <li>Your <strong>adjusted gross income</strong> is: {this.state.earnings - this.state.deductions - this.state.exemptions}</li>
          <li>Your <strong>taxable income</strong> is: {this.state.earnings - this.state.deductions - this.state.exemptions - this.state.before}</li>
          <br/>
          <li>Your <strong>FICA tax expense</strong> is:{this.state.earnings  * (.0145 +.062)}</li>
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
