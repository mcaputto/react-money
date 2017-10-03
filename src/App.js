import React, { Component } from 'react'
import './skeleton.css'
import './normalize.css'
// import logo from './logo.svg';
// import './App.css';


const title = 'Hi, welcome to the PF calculator 2000. Beep boop.'
const subtitle = 'Personal finance is the financial management which an individual or a family unit performs to budget, save, and spend monetary resources over time, taking into account various financial risks and future life events. When planning personal finances, the individual would consider the suitability to his or her needs of a range of banking products (checking, savings accounts, credit cards and consumer loans) or investment private equity, (stock market, bonds, mutual funds) and insurance (life insurance, health insurance, disability insurance) products or participation and monitoring of and- or employer-sponsored retirement plans, social security benefits, and income tax management'
const salary = 'A wage is monetary compensation paid by an employer to an employee in exchange for work done.'
const bonus = 'A bonus payment is usually made to employees in addition to their base salary as part of their wages or salary.'
const aggregate = 'Together, guaranteed and variable pay comprise total cash compensation. The ratio of base salary to variable pay is referred to as the pay mix.'

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
                <Header phrase={title} />
                <HeaderDescription phrase={subtitle}/>
            </div>
        )
    }
}

const Body = () =>
    <div className="row">
        <h4>Inputs...</h4>
        <div className="row">
            <Row description={<Description text={salary}/>} amount={<Combo message='Salary' dollars='$100,000' />} />
            <Row description={<Description text={bonus}/>} amount={<Combo message='Bonus' dollars='$20,000' />} />
        </div>
        <h4>Outputs...</h4>
        <div className="row">
            <Row description={<Description text={aggregate} />} amount={<Combo message='Aggregate' dollars='$120,000' />} />
        </div>
    </div>

class Description extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'left'}}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class Combo extends Component {
    render () {
        return (
            <div className="six columns">
                <div className="row">
                    <Output message={this.props.message} />
                    <Amount dollars={this.props.dollars} />
                </div>
            </div>
        )
    }
}

class Row extends Component {
    render() {
        return (
            <div className="row">
                {this.props.description}
                {this.props.amount}
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


class Output extends Component {
    render() {
        return (
            <div className="six columns" style={{textAlign: 'left'}}>
                <p><strong>{this.props.message}:</strong></p>
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
