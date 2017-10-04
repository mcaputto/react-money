import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'

//-DATA-----------------------------------------------------------------------
const header = {
    title: 'Hi, welcome to the PF calculator 2000. Beep boop.',
    subtitle: 'Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events. When planning personal finances, the individual would consider the suitability to his or her needs of a range of banking products (checking, savings accounts, credit cards and consumer loans) or investment private equity, (stock market, bonds, mutual funds) and insurance (life insurance, health insurance, disability insurance) products or participation and monitoring of and- or employer-sponsored retirement plans, social security benefits, and income tax management',
}

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

// -TITLE---------------------------------------------------------------------
class Header extends Component {
    render() {
        return (
            <div className="twelve columns">
                <h1>{this.props.phrase}</h1>
            </div>
        );
    }
}

class HeaderDescription extends Component {
    render() {
        return (
            <div className="twelve columns">
                <div><p><i>{this.props.phrase}</i></p></div>
            </div>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <div className="row">
                <Header phrase={header.title} />
                <HeaderDescription phrase={header.subtitle}/>
            </div>
        )
    }
}
// ---------------------------------------------------------------------------

// -BODY----------------------------------------------------------------------
const Body = () =>
    <div className="row">
        <h4>Please enter your inputs here...</h4>
        <div className="row">
            <AppRow description={<AppRowLeftSection text={metrics.salary.description}/>} amount={<AppRowRightSection message={metrics.salary.name} dollars='$100,000' />} />
            <AppRow description={<AppRowLeftSection text={metrics.bonus.description}/>} amount={<AppRowRightSection message={metrics.bonus.name} dollars='$20,000' />} />
        </div>
        <h4>Here are your personal finance metrics...</h4>
        <div className="row">
            <AppRow description={<AppRowLeftSection text={metrics.totalCashCompensation.description} />} amount={<AppRowRightSection message={metrics.totalCashCompensation.name} dollars='$120,000' />} />
        </div>
    </div>

class AppRow extends Component {
    render() {
        return (
            <div className="row">
                {this.props.description}
                {this.props.amount}
            </div>
        )
    }
}

class AppRowLeftSection extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'left'}}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class AppRowRightSection extends Component {
    render () {
        return (
            <div className="six columns">
                <div className="row">
                    <SixColumnsLeftAlignedDiv message={this.props.message} />
                    <SixColumnsRightAlignedDiv dollars={this.props.dollars} />
                </div>
            </div>
        )
    }
}

class SixColumnsRightAlignedDiv extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'right'}}>
                <p>{this.props.dollars}</p>
            </div>
        )
    }
}

class SixColumnsLeftAlignedDiv extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'left'}}>
                <p><strong>{this.props.message}:</strong></p>
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
                <Title />
                <Body />
            </div>
        )
    }
}

export default App
// ---------------------------------------------------------------------------