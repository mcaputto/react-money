import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'

//-DATA-----------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

// -HEADER--------------------------------------------------------------------

const header = {
    title: 'Hi, welcome to the PF calculator 2000.',
    subtitle: 'Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events.',
}

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <h1>{header.title}</h1>
                </div>
                <div className="row">
                    <div><p>{header.subtitle}</p></div>
                </div>
            </div>
        )
    }
}

// -BODY----------------------------------------------------------------------

class Body extends Component {
    render() {
        return (
            <div className="row">
                {/* Iterate through object and generate multiple components */}
                {Object.keys(data).map(key => (
                    <Metric name={data[key].name}
                            value={data[key].amount}
                            description={data[key].description}
                            key={key}
                    />
                ))}
            </div>
        )
    }
}


class Metric extends Component {
    render() {
        return (
            <div className="row">
                <div className="one-half column">
                    <div className="row">
                        <div className="one-half column" style={{textAlign: 'left'}}>
                            <p><strong>{this.props.name}</strong></p>
                        </div>
                        <div className="one-half column" style={{textAlign: 'left'}}>
                            <p>{this.props.value}</p>
                        </div>
                    </div>
                </div>
                <div className="one-half column" style={{textAlign: 'left'}}>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}


// -MOUNT---------------------------------------------------------------------

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Body />
                Made by <a href='https://github.com/mcaputto'>mcaputto.</a>
            </div>
        )
    }
}

export default App
