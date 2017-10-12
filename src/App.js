// TODO: validateInput() -> only accept positive values

import React, { Component } from 'react'

const data = {
    earnings: {
        title: 'Earnings',
        description: 'Include all wages, salaries, tips, bonuses, etc.',
    },
    before: {
        title: 'Pre-tax',
        description: '401(a), 401(k), 403(b), 457, 529, HSA, IRA, TSP, etc. ',
    },
    after: {
        title: 'After-tax',
        description: 'Roth 401(k), Roth 403(b), Roth 457(b), Roth IRA, etc.',
    },
    deductions: {
        title: 'Deductions',
        description: '$6,350 single, $9,350 head of household, $12,700 married'
    },
    exemptions: {
        title: 'Exemptions',
        description: '$4,050',
    },
}

class Input extends Component {
    onChange = (e) => {
        this.setState({ value: e.target.value })
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className='field'>
                <label className='label'>{ this.props.title }</label>
                <div className='control has-icons-left'>
                <span className='icon is-small is-left'><i className='fa fa-money'></i></span>
                    <input className='input is primary'
                        name='amount'
                        type='number'
                        placeholder='Input...'
                        value={ this.props.propsValue }
                        onChange={ this.onChange }
                    />
                </div>
                <p className='help'>{ this.props.description }</p>
            </div>
        )
    }
}

// const Inputs = () => Object.keys(data).map(key => (
//   <Input
//     key={key}
//     title={ data[key].title }
//     description={ data[key].description }
//   />
// ))

class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            earnings: '',
            before: '',
            after: '',
            deductions: '',
            exemptions: '',
        }
    }

    _handleEarningsChange = (value) => { this.setState({ earnings: value}) }
    _handleBeforeChange = (value) => { this.setState({ before: value}) }
    _handleAfterChange = (value) => { this.setState({ after: value}) }
    _handleDeductionsChange = (value) => { this.setState({ deductions: value}) }
    _handleExemptionsChange = (value) => { this.setState({ exemptions: value}) }

    render() {
        return [
            <h2 className='title is-2'>Your variables</h2>,
            <div className='columns'>
                <div className='column'>
                    <Input
                        title={ data['earnings'].title }
                        description={ data['earnings'].description }
                        propsValue={ this.state.earnings }
                        onChange={ this._handleEarningsChange }
                    />
                </div>
                <div className='column'>
                    <Input
                        title={ data['before'].title }
                        description={ data['before'].description }
                        propsValue={ this.state.before }
                        onChange={ this._handleBeforeChange }
                    />
                </div>
                <div className='column'>
                    <Input
                        title={ data['after'].title }
                        description={ data['after'].description }
                        propsValue={ this.state.after }
                        onChange={ this._handleAfterChange }
                    />
                </div>
                <div className='column'>
                    <Input
                        title={ data['deductions'].title }
                        description={ data['deductions'].description }
                        propsValue={ this.state.deductions }
                        onChange={ this._handleDeductionsChange }
                    />
                </div>
                <div className='column'>
                    <Input
                        title={ data['exemptions'].title }
                        description={ data['exemptions'].description }
                        propsValue={ this.state.exemptions }
                        onChange={ this._handleExemptionsChange }
                    />
                </div>
            </div>,
        ]
    }
}

const Header = () => [
    <h1 className='title is-1'>Simple finance</h1>,
    <p className='subtitle is-1'>A financial calculator for the rest of us</p>,
    <p>Hi, I'm a computer program running in your browser. All calculations are being performed client-side using your browser's JavaScript interpreter. Absolutely no data is being stored online. In fact, you could turn off your internet connection, right now, without any interruptions to my functionality. I'm here to help you learn about your finances... please fill out the text forms below to see what I can do!</p>,
    <br/>,
]

const Outputs = () => [
    <h2 className='title is-2'>Your predicted metrics</h2>,
    <p>According to my super smart computer brain...</p>,
    <br/>,
    <ul>
        <li>Your <strong>gross income</strong> is: </li>
        <li>Your <strong>adjusted gross income</strong> is: </li>
        <li>Your <strong>taxable income</strong> is: </li>
        <br/>
        <li>Your <strong>FICA tax expense</strong> is:</li>
        <li>Your <strong>federal income tax expense</strong> is:</li>
        <li>Your <strong>state income tax expense</strong> is:</li>
        <br/>
        <li>Your <strong>effective FICA tax rate</strong> is:</li>
        <li>Your <strong>effective federal income tax rate</strong> is:</li>
        <li>Your <strong>effective state income tax rate</strong> is:</li>
        <br/>
        <li>Your <strong>net income spend percentage</strong> is:</li>
        <li>Your <strong>net income save percentage</strong> is:</li>
        <li>Your <strong>net income tax percentage</strong> is:</li>
        <br/>
        <li>Your <strong>gross income spend percentage</strong> is:</li>
        <li>Your <strong>gross income save percentage</strong> is:</li>
    </ul>,
]

class Body extends Component {
    render() {
        return [
            <Inputs />,
            <Outputs />,
        ]
    }
}

const Footer = () =>
    <footer className='footer'>
        <div className='container'>
            <div className='content has-text-centered'>
                <p><strong>Simple finance</strong> by <a href='https://github.com/mcaputto'>mcto</a></p>
            </div>
        </div>
    </footer>

class App extends Component {
    render() {
        return [
            <Header />,
            <Body />,
            <Footer />,
        ]
    }
}

export default App
