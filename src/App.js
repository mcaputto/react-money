import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './skeleton.css'
import './normalize.css'

const title = 'Hi, welcome to the PF calculator 2000.'
const subtitle = 'Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events.'
const data = {
  salary: {
    name: 'Salary',
    value: '$100,000',
    description: 'A wage is monetary compensation paid by an employer to an employee in exchange for work done.',
  },
  bonus: {
    name: 'Bonus',
    value: '$20,000',
    description: 'A bonus payment is usually made to employees in addition to their base salary as part of their wages or salary.',
  },
  grossIncome: {
    name: 'Gross income',
    value: '$120,000',
    description: 'To do...',
  },
  deductions: {
    name: 'Deductions',
    value: '$ to do...',
    description: 'To do...',
  },
  exemptions: {
    name: 'Exemptions',
    value: '$ to do...',
    description: 'To do...',
  },
  adjustedGrossIncome: {
    name: 'Adjusted gross income',
    value: '$ to do...',
    description: 'To do...',
  },
  pretaxInvestment: {
    name: 'Pretax investment',
    value: '$ to do...',
    description: 'To do...',
  },
  taxableIncome: {
    name: 'Taxable income',
    value: '$ to do...',
    description: 'To do...',
  },
  ficaTax: {
    name: 'FICA tax',
    value: '$ to do...',
    description: 'To do...',
  },
  federalIncomeTax: {
    name: 'Federal income tax',
    value: '$ to do...',
    description: 'To do...',
  },
  stateIncomeTax: {
    name: 'State income tax',
    value: '$ to do...',
    description: 'To do...',
  },
  posttaxInvestment: {
    name: 'Posttax investment',
    value: '$ to do...',
    description: 'To do...',
  },
  discretionaryIncome: {
    name: 'Discretionary income',
    value: '$ to do...',
    description: 'To do...',
  },
}

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="row">
          <h1>{this.props.title}</h1>
        </div>
        <div className="row">
          <div><p>{this.props.subtitle}</p></div>
        </div>
      </div>
    )
  }
}
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

class Metric extends Component {
  render() {
    return (
      <div>
        <div className="three columns" style={{textAlign: 'left'}}>
          <p><strong>{this.props.name}</strong></p>
        </div>
        <div className="three columns" style={{textAlign: 'left'}}>
          <p>{this.props.value}</p>
        </div>
        <div className="six columns" style={{textAlign: 'left'}}>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
Metric.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
Metric.defaultProps = {
  name: 'Name goes here',
  value: 0,
  description: 'Description goes here',
}


class Body extends Component {
  render() {
    return (
      <div className="row">
        {this.props.item}
      </div>
    )
  }
}
Body.propTypes = {
  item: PropTypes.array,
}

const generateRow = () => {
  return (
    Object.keys(data).map(key => (
      <Metric name={data[key].name}
          value={data[key].value}
          description={data[key].description}
          key={key}
      />
    ))
  )
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title={title}
          subtitle={subtitle}/>
        <Body
          item={generateRow()}
        />
        Made by <a href='https://github.com/mcaputto'>mcaputto</a>.
      </div>
    )
  }
}

export default App
