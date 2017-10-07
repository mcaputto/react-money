import React, { Component } from 'react'
import PropTypes from 'prop-types'

const title = 'Hi, welcome to the PF calculator 2000.'
const subtitle = 'Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events.'
const data = {
  salary: {
    name: 'Salary',
    description: 'A wage is monetary compensation paid by an employer to an employee in exchange for work done.',
  },
  bonus: {
    name: 'Bonus',
    description: 'A bonus payment is usually made to employees in addition to their base salary as part of their wages or salary.',
  },
  grossIncome: {
    name: 'Gross income',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  deductions: {
    name: 'Deductions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  exemptions: {
    name: 'Exemptions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  adjustedGrossIncome: {
    name: 'Adjusted gross income',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  pretaxInvestment: {
    name: 'Pretax investment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  taxableIncome: {
    name: 'Taxable income',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  ficaTax: {
    name: 'FICA tax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  federalIncomeTax: {
    name: 'Federal income tax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  stateIncomeTax: {
    name: 'State income tax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  posttaxInvestment: {
    name: 'Posttax investment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
  discretionaryIncome: {
    name: 'Discretionary income',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id viverra libero. Quisque in sem sit amet ipsum feugiat tincidunt.',
  },
}
const footer = () =>
  <div><p>Made by <a href='https://github.com/mcaputto'>mcaputto</a></p></div>

class Header extends Component {
  render() {
    return [
        <div><h1>{this.props.title}</h1></div>,
        <div><p>{this.props.subtitle}</p></div>,
    ]
  }
}
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

class Metric extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    // We create these to make the <input /> form a "controlled component"
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  // handleSubmit(event) {
  //   alert('A value was submitted: ' + this.state.value)
  //   event.preventDefault()
  // }

  render() {
    return (
        <div>
          <div><p><strong>{this.props.name}</strong></p></div>
          <div><p><input type="number" value={this.state.value} onChange={this.handleChange} /></p></div>
          <div><p>{this.props.description}</p></div>
        </div>
    )
  }
}
Metric.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
Metric.defaultProps = {
  name: 'Name goes here',
  value: 0,
  description: 'Description goes here',
}

class Body extends Component {
  render() {
    return [
      <div>{this.props.items}</div>,
    ]
  }
}
Body.propTypes = {
  items: PropTypes.array,
}

const generateRow = () => Object.keys(data).map(key => (
  <Metric
    key={key}
    name={data[key].name}
    value={data[key].value}
    description={data[key].description}
  />
))

class App extends Component {
  render() {
    return (
      <div>
        {/*Warning ignored due to https://reactjs.org/blog/2017/09/26/react-v16.0.html*/}
        <div><Header title={title} subtitle={subtitle} /></div>
        {/*Warning ignored due to https://reactjs.org/blog/2017/09/26/react-v16.0.html*/}
        <Body items={generateRow()} />
        <div>{footer()}</div>
      </div>
    )
  }
}

export default App
