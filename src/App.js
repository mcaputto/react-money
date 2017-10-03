import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'
// import logo from './logo.svg';
// import './App.css';


const titleMessage =
    <h1>Hi, welcome to the PF calculator 2000. Beep boop.</h1>

const TitleColumn = () =>
    <div className="twelve column">
        {titleMessage}
    </div>

const Title = () =>
    <div className="row">
        <TitleColumn />
    </div>

const centerStyle = {
    // position: "absolute",
    // top: "50%",
    // transform: "translateY(-50%)",
}

const SalaryValue = () =>
    <div className="six columns" style={{textAlign: 'right'}, {centerStyle}}>
        <p>$1,000,000</p>
    </div>

const SalaryPrompt = () =>
    <div className="six columns" style={{textAlign: 'left'}}>
        <p><strong>Enter your salary:</strong></p>
    </div>

const SalaryInput = () =>
    <div className="six columns">
        <div className="row">
            <SalaryPrompt />
            <SalaryValue />
        </div>
    </div>

const SalaryDescription = () =>
    <div className="six columns" style={{textAlign: 'left'}}>
        <p>A wage is monetary compensation paid by an employer to an employee in exchange for work done.</p>
    </div>

const SalaryRow = () =>
    <div className="row">
        <SalaryDescription />
        <SalaryInput />
    </div>


const description =
    <div><p>Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events. When planning personal finances, the individual would consider the suitability to his or her needs of a range of banking products (checking, savings accounts, credit cards and consumer loans) or investment private equity, (stock market, bonds, mutual funds) and insurance (life insurance, health insurance, disability insurance) products or participation and monitoring of and- or employer-sponsored retirement plans, social security benefits, and income tax management.</p></div>

const BodyDescription = () =>
    <div className="twelve columns">
        {description}
    </div>

const Body = () =>
    <div className="row">
        <BodyDescription />
        <h4>Inputs...</h4>
        <div className="row">
            <SalaryRow />
            <SalaryRow />
        </div>
    </div>


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
