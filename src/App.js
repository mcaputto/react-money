import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'

//-DATA-----------------------------------------------------------------------
const metrics = {
    salary: {
        name: 'Salary',
        description: 'A wage is monetary compensation paid by an employer to an employee in exchange for work done.',
    },
    bonus: {
        name: 'Bonus',
        description: 'A bonus payment is usually made to employees in addition to their base salary as part of their wages or salary.',
    },
    totalCashCompensation: {
        name: 'Total cash compensation',
        description: 'Together, guaranteed and variable pay comprise total cash compensation. The ratio of base salary to variable pay is referred to as the pay mix.',
    },
}
// ---------------------------------------------------------------------------

// -HEADER--------------------------------------------------------------------

const header = {
    title: 'Hi, welcome to the PF calculator 2000.',
    subtitle: 'Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events.',
}

class WebsiteHeader extends Component {
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
// ---------------------------------------------------------------------------
// -BODY----------------------------------------------------------------------
const WebsiteBody = () =>
    <div className="row">
        <h4>Please enter your inputs here...</h4>
        <div className="row">
            <AppRow
                description={
                    <DescriptionArea
                        text={metrics.salary.description}
                    />
                }
                amount={
                    <InputArea
                        metricName={metrics.salary.name}
                        metricValue='$100,000'
                    />
                }
            />
            <AppRow
                description={
                    <DescriptionArea
                        text={metrics.bonus.description}
                    />
                }
                amount={
                    <InputArea
                        metricName={metrics.bonus.name}
                        metricValue='$20,000'
                    />
                }
            />
        </div>
        <h4>Here are your personal finance metrics...</h4>
        <div className="row">
            <AppRow
                description={
                    <DescriptionArea
                        text={metrics.totalCashCompensation.description}
                    />
                }
                amount={
                    <InputArea
                        metricName={metrics.totalCashCompensation.name}
                        metricValue='$120,000'
                    />
                }
            />
        </div>
    </div>

class AppRow extends Component {
    render() {
        return (
            <div className="row">
                {this.props.amount}
                {this.props.description}
            </div>
        )
    }
}

class DescriptionArea extends Component {
    render() {
        return (
            <div className="one-half column" style={{textAlign: 'left'}}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class InputArea extends Component {
    render () {
        return (
            <div className="one-half column">
                <div className="row">
                    <SubInputArea text={<strong>{this.props.metricName}</strong>} />
                    <SubInputArea text={this.props.metricValue} />
                </div>
            </div>
        )
    }
}

class SubInputArea extends Component {
    render() {
        return (
            <div className="one-half column" style={{textAlign: 'left'}}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
// ---------------------------------------------------------------------------
// -MOUNT---------------------------------------------------------------------
class App extends Component {
    render() {
        return (
            <div className="container">
                <WebsiteHeader />
                <WebsiteBody />
            </div>
        )
    }
}

export default App
// ---------------------------------------------------------------------------