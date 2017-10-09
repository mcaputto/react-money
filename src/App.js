import React, { Component } from 'react'
import PropTypes from 'prop-types'

const userInputsData = {
  salary: {
    name: 'Earnings',
    description: 'Total cash compensation',
  },
  pretaxInvestment: {
    name: 'Before-tax investments',
    description: 'Max out that 401k!',
  },
  posttaxInvestment: {
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

class Body extends Component {
  render() {
    return (
      <div className='column'>{this.props.array}</div>
    )
  }
}
Body.propTypes = {
  array: PropTypes.array,
}

class Metric extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
// <div> debug: this.state.value is {this.state.value}
    return (
      <div className='field'>
        <label className='label'>{this.props.name}</label>
        <div className='control has-icons-left'>
        <span className='icon is-small is-left'><i className='fa fa-money'></i></span>
          <input className='input is primary'
            placeholder='Enter your value here...'
            type='text'
            onChange={this.handleInputChange}
          />
        </div>
        <p className='help'>{this.props.description}</p>
      </div>
    )
  }
}
Metric.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // value: PropTypes.number,
}
Metric.defaultProps = {
  name: 'Name goes here',
  description: 'Description goes here',
}

const generateUserInputRows = () => Object.keys(userInputsData).map(key => (
  <Metric
    key={key}
    name={userInputsData[key].name}
    description={userInputsData[key].description}
  />
))

// Warnings ignored due to https://reactjs.org/blog/2017/09/26/react-v16.0.html
class App extends Component {
  render() {
    return [
      <h1 className='title'>Simple finance</h1>,
      <p className='subtitle'>A financial calculator for the rest of us</p>,
      <p>Hi, I'm a computer program running in your browser. All calculations are being performed client-side using your browser's JavaScript interpreter. Absolutely no data is being stored online. In fact, you could turn off your internet connection, right now, without any interruptions to my functionality. I'm here to help you learn about your finances... please fill out the text forms below to learn more!</p>,
      <div className="columns">
          <div className="column">
            <Body array={generateUserInputRows()} />
          </div>
          <div className="column">
            {/* TODO: show the state of child components
            <br/>
            <p>You entered the following:</p>
            <p>Salary: </p>
            <p>Bonus: </p>
            <p>Deductions: </p>
            <p>Exemptions: </p>
            <p>Before-tax investments: </p>
            <p>After-tax investments: </p>*/}
          </div>
      </div>,
      <footer className='footer'>
        <div className='container'>
          <div className='content has-text-centered'>
            <p><strong>Simple finance</strong></p>
            <p>Made with care by <a href='https://github.com/mcaputto'>mcto</a></p>
            <p>Front end stack includes:</p>
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
