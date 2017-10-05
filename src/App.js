import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'

//-DATA-----------------------------------------------------------------------

const data = {
    salary: {
        name: 'Salary',
        description: 'A wage is monetary compensation paid by an employer to an employee in exchange for work done.',
        amount: '$100,000',
    },
    bonus: {
        name: 'Bonus',
        description: 'A bonus payment is usually made to employees in addition to their base salary as part of their wages or salary.',
        amount: '$20,000',
    },
    totalCashCompensation: {
        name: 'Total cash compensation',
        description: 'Together, guaranteed and variable pay comprise total cash compensation. The ratio of base salary to variable pay is referred to as the pay mix.',
        amount: '$120,000',
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

const Body = () =>
    <div className="row">
        <div className="row">
            <AppRow metricName={data.salary.name}
                    metricValue={data.salary.amount}
                    metricText={data.salary.description}
            />
            <AppRow metricName={data.bonus.name}
                    metricValue={data.bonus.amount}
                    metricText={data.bonus.description}
            />
            <AppRow metricName={data.totalCashCompensation.name}
                    metricValue={data.totalCashCompensation.amount}
                    metricText={data.totalCashCompensation.description}
                    />
        </div>
    </div>

class AppRow extends Component {
    render() {
        return (
            <div className="row">
                <div className="one-half column">
                    <div className="row">
                        <div className="one-half column" style={{textAlign: 'left'}}>
                            <p>{<strong>{this.props.metricName}</strong>}</p>
                        </div>
                        <div className="one-half column" style={{textAlign: 'left'}}>
                            <p>{this.props.metricValue}</p>
                        </div>
                    </div>
                </div>
                <div className="one-half column" style={{textAlign: 'left'}}>
                    <p>{this.props.metricText}</p>
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
            </div>
        )
    }
}

export default App
