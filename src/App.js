import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'
// import logo from './logo.svg';
// import './App.css';


const titleMessage =
    <h1>Hi, welcome to the PF calculator 2000. Beep boop.</h1>

const TitleHeader = () =>
    <div className="twelve columns">
        {titleMessage}
    </div>

const titleDescription =
    <div><p><i>Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events. When planning personal finances, the individual would consider the suitability to his or her needs of a range of banking products (checking, savings accounts, credit cards and consumer loans) or investment private equity, (stock market, bonds, mutual funds) and insurance (life insurance, health insurance, disability insurance) products or participation and monitoring of and- or employer-sponsored retirement plans, social security benefits, and income tax management.</i></p></div>

const TitleDescription = () =>
    <div className="twelve columns" style={{textAlign: 'left'}}>
        {titleDescription}
    </div>

const Title = () =>
    <div className="row">
        <TitleHeader />
        <TitleDescription />
    </div>

// -SALARY--------------------------------------------------------------------

const SalaryDescription = () =>
    <div className="six columns" style={{textAlign: 'left'}}>
        <p>A wage is monetary compensation paid by an employer to an employee in exchange for work done.</p>
    </div>

const SalaryInput = () =>
    <div className="six columns">
        <div className="row">
            <Input message='Salary' />
            <Amount dollars='$100,000' />
        </div>
    </div>

// -BONUS---------------------------------------------------------------------

const BonusInput = () =>
    <div className="six columns">
        <div className="row">
            <Input message='Bonus'/>
            <Amount dollars='$20,000' />
        </div>
    </div>

const BonusDescription = () =>
    <div className="six columns" style={{textAlign: 'left'}}>
        <p>A bonus payment is usually made to employees in addition to their base salary as part of their wages or salary.</p>
    </div>

// -AGGREGATE-----------------------------------------------------------------

const AggregateInput = () =>
    <div className="six columns">
        <div className="row">
            <Output message='Aggregate' />
            <Amount dollars='$120,000' />
        </div>
    </div>

const AggregateDescription = () =>
    <div className="six columns" style={{textAlign: 'left'}}>
        <p>Together, guaranteed and variable pay comprise total cash compensation. The ratio of base salary to variable pay is referred to as the pay mix.</p>
    </div>

// -BODY----------------------------------------------------------------------

const Body = () =>
    <div className="row">
        <h4>Inputs...</h4>
        <div className="row">
            <InputRow description={<SalaryDescription />} input={<SalaryInput />} />
            <InputRow description={<BonusDescription />} input={<BonusInput />} />
        </div>
        <h4>Outputs...</h4>
        <div className="row">
            <InputRow description={<AggregateDescription />} input={<AggregateInput />} />
        </div>
    </div>

class InputRow extends Component {
    render() {
        return (
            <div className="row">
                {this.props.description}
                {this.props.input}
            </div>
        )
    }
}

class Amount extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'right'}}>
                <p>{this.props.dollars}</p>
            </div>
        )
    }
}

class Input extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'left'}}>
                <p><strong>Enter your {this.props.message}:</strong></p>
            </div>
        )
    }
}

class Output extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'left'}}>
                <p><strong>Here is your {this.props.message}:</strong></p>
            </div>
        )
    }
}

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

export default App;
