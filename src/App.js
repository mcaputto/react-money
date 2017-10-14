import React, { Component } from 'react'

const title =
	<p className="title is-1">
		Simple finance
	</p>

const subtitle =
	<p className="subtitle is-3">
		A financial calculator for the rest of us
	</p>

const introduction =
	<p>
		Hi, I'm a computer program running in your browser. All calculations
		are being performed client-side using your browser's JavaScript
		interpreter. Absolutely no data is being stored online. In fact, you
		could turn off your internet connection, right now, without any
		interruptions to my functionality. I'm here to help you learn about
		your finances... please fill out the text forms below to see what I can
		do!
	</p>

const Header = () =>
	<div>
		{title}
		{subtitle}
		{introduction}
		<br/>
	</div>

const MoneyInput = props =>
	<p className='control has-icons-left'>
		<span className='icon is-small is-left'>
			<i className='fa fa-money'></i>
		</span>
		<Input {...props} />
	</p>

const TitleField = props =>
	<label className='label'>
		{props.bulmaTitle}
	</label>

const DescriptionField = props =>
	<p className='help'>
		{props.bulmaDescription}
	</p>

const Input = props =>
	<input
		name={props.controlledName}
		type={props.controlledType}
		value={props.controlledValue}
		onChange={props.controlledOnChange}
		className='input is primary'
	/>

const ControlledInput = props =>
	<div className='field'>
		<TitleField {...props} />
		<MoneyInput {...props} />
		<DescriptionField {...props} />
	</div>

class Body extends Component {
 	constructor(props) {
		super(props)
		this.state = {
			gross_income : '',
			before : '',
			after: '',
			deductions: '',
			exemptions: '',
		}
		this.onChange = this.onChange.bind(this)
	}
	onChange(e) {
		let newValue = e.target.value
		this.setState({[e.target.name] : newValue})
	}
	render() {
		return (
			<div>
				<p className='title is-3'>Your personal variables</p>
				<div className='columns'>
					<div className='column'>
						<ControlledInput
							controlledName='gross_income'
							controlledType='text'
							controlledValue={this.state.gross_income}
							controlledOnChange={this.onChange}
							bulmaTitle='Gross income'
							bulmaDescription='Include all wages, salaries, tips, bonuses, etc.'
						/>
					</div>
					<div className='column'>
						<ControlledInput
							controlledName='before'
							controlledType='text'
							controlledValue={this.state.before}
							controlledOnChange={this.onChange}
							bulmaTitle='Tax deferred'
							bulmaDescription='401(a), 401(k), 403(b), 457, 529, HSA, IRA, TSP, etc. '
						/>
					</div>
					<div className='column'>
						<ControlledInput
							controlledName='after'
							controlledType='text'
							controlledValue={this.state.after}
							controlledOnChange={this.onChange}
							bulmaTitle='Savings'
							bulmaDescription='Roth 401(k), Roth 403(b), Roth 457(b), Roth IRA, etc.'
						/>
					</div>
					<div className='column'>
						<ControlledInput
							controlledName='deductions'
							controlledType='text'
							controlledValue={this.state.deductions}
							controlledOnChange={this.onChange}
							bulmaTitle='Deductions'
							bulmaDescription='$6,350 single, $9,350 head of household, $12,700 married'
						/>
					</div>
					<div className='column'>
						<ControlledInput
							controlledName='exemptions'
							controlledType='text'
							controlledValue={this.state.exemptions}
							controlledOnChange={this.onChange}
							bulmaTitle='Exemptions'
							bulmaDescription='$4,050'
						/>
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<p className='title is-3'>Your predicted metrics</p>
						<p>Your <strong>adjusted gross income</strong> is ______ and your <strong>taxable income</strong> is: ______ </p>
						<br/>
						<p className="subtitle is-4">Gross income</p>
						<p>As a percentage of your gross income, you paid ______ in taxes, saved ______, and spent ______.</p>
						<br/>
						<p className="subtitle is-4">Net income</p>
						<p>As a percentage of your net income, you saved ______ and spent ______.</p>
						<br/>
					</div>
				</div>
			</div>
		)
	}
}

const Footer = () =>
	<footer className='footer'>
		<div className='container'>
			<div className='content has-text-centered'>
				{footer}
			</div>
		</div>
	</footer>

const footer =
	<div>
		<p>
			<strong>Simple finance</strong> by <a href='https://github.com/mcaputto'>mcto</a>
		</p>
		<p>
			Built using&nbsp;
			<a href='https://reactjs.org'>React</a>&nbsp;
			<a href='http://babeljs.io'>Babel</a>&nbsp;
			<a href='http://www.ecma-international.org/ecma-262/6.0/index.html'>ES6</a>&nbsp;
			<a href='https://eslint.org'>ESLint</a>&nbsp;
			<a href='https://nodejs.org/en/'>Node</a>&nbsp;
			<a href='https://www.npmjs.com'>NPM</a>&nbsp;
			<a href='https://yarnpkg.com/en/'>Yarn</a>&nbsp;
			<a href='https://webpack.github.io/'>Webpack</a>&nbsp;
		</p>
	</div>

const App = () =>
	<div>
		<Header />
		<Body />
		<Footer />
	</div>

export default App
