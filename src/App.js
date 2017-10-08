import React, { Component } from 'react'
import PropTypes from 'prop-types'

const userInputsData = {
	salary: {
		name: 'Salary',
		description: 'Annual earnings',
	},
	bonus: {
		name: 'Bonus',
		description: 'One-time cash bonus',
	},
	deductions: {
		name: 'Deductions',
		description: 'For tax year 2017 single taxpayers, this is $6,350 ',
	},
	exemptions: {
		name: 'Exemptions',
		description: 'For tax year 2016, this is $4,050',
	},
	pretaxInvestment: {
		name: 'Before-tax investments',
		description: 'Max out that 401k, son!',
	},
	posttaxInvestment: {
		name: 'After-tax investments',
		description: 'Max out that Roth IRA!',
	},
}

class Body extends Component {
	render() {
		return [
			<div className='container'>{this.props.array}</div>,
		]
	}
}
Body.propTypes = {
	array: PropTypes.array,
}

class Metric extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	render() {
// <div> debug: this.state.value is {this.state.value}
		return (
			<div className='field'>
				<label className='label'>{this.props.name}</label>
				<div className='control has-icons-left'>
				<span className='icon is-small is-left'><i className='fa fa-money'></i></span>
					<input className='input is primary'
						placeholder='Enter your value here...'
						type='text'
						onChange={this.handleInputChange}
					/>
				</div>
				<p className='help'>{this.props.description}</p>
			</div>
		)
	}
}
Metric.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	// value: PropTypes.number,
}
Metric.defaultProps = {
	name: 'Name goes here',
	description: 'Description goes here',
}

const generateUserInputRows = () => Object.keys(userInputsData).map(key => (
	<Metric
		key={key}
		name={userInputsData[key].name}
		description={userInputsData[key].description}
	/>
))

// Warnings ignored due to https://reactjs.org/blog/2017/09/26/react-v16.0.html
class App extends Component {
	render() {
		return [
			<h1 className='title'>Simple finance calculator</h1>,
			<p className='subtitle'>A financial calculator for the rest of us</p>,

			<p>Enter your earnings and savings below:</p>,
			<br/>,
			<Body array={generateUserInputRows()} />,
			<br/>,

			<footer className='footer'>
				<div className='container'>
					<div className='content has-text-centered'>
						<p>
							<strong>Simple finance</strong> made by <a href='https://github.com/mcaputto'>mcto</a>
						</p>
						<p>
							<a className='icon' href='https://github.com/mcaputto'>
								<i className='fa fa-github'></i>
							</a>
						</p>
					</div>
				</div>
			</footer>,
		]
	}
}

export default App
