import React, { Component } from 'react'
import PropTypes from 'prop-types'

const title = 'PF calculator'
const subtitle = 'Learn where your money went'
const data = {
	salary: {
		name: 'Salary',
		description: 'How much you make',
	},
	bonus: {
		name: 'Bonus',
		description: 'Cha ching!',
	},
	grossIncome: {
		name: 'Gross income',
		description: 'Very nice',
	},
	deductions: {
		name: 'Deductions',
		description: 'That\'s it?',
	},
	exemptions: {
		name: 'Exemptions',
		description: 'Wish there were more...',
	},
	adjustedGrossIncome: {
		name: 'Adjusted gross income',
		description: 'The (in)famous AGI',
	},
	pretaxInvestment: {
		name: 'Before-tax investments',
		description: 'Max out that 401k, son!',
	},
	taxableIncome: {
		name: 'Taxable income',
		description: 'Wish this was smaller',
	},
	ficaTax: {
		name: 'FICA tax',
		description: 'Gotta take care of them old peeps',
	},
	federalIncomeTax: {
		name: 'Federal income tax',
		description: 'Uncle Sam needs his money',
	},
	stateIncomeTax: {
		name: 'State income tax',
		description: 'The state needs their share, of course',
	},
	posttaxInvestment: {
		name: 'After-tax investments',
		description: 'Max out that Roth IRA!',
	},
	discretionaryIncome: {
		name: 'Discretionary income',
		description: 'That\'s it?',
	},
}
const footer = () =>
	<div><p>Made by <a href='https://github.com/mcaputto'>mcto</a></p></div>

class Header extends Component {
	render() {
		return [
			<div className="title">{this.props.title}</div>,
			<div className="subtitle">{this.props.subtitle}</div>,
		]
	}
}

Header.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

class Body extends Component {
	render() {
		return (
			<div>{this.props.array}</div>
		)
	}
}
Body.propTypes = {
	array: PropTypes.array,
}

class Metric extends Component {
	constructor(props) {
		super(props)
		this.state = {value: '',}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	render() {
		return (
			<div>
				<div><b>{this.props.name}</b></div>
				<div>{this.props.description}</div>
				<div><input type="number" value={this.state.value} onChange={this.handleChange} /></div>
				<br/>
			</div>
		)
	}
}
Metric.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	value: PropTypes.number,
}
Metric.defaultProps = {
	name: 'Name goes here',
	description: 'Description goes here',
}

const generateMetrics = () => Object.keys(data).map(key => (
	<Metric
		key={key}
		name={data[key].name}
		description={data[key].description}
	/>
))

// Warnings ignored due to https://reactjs.org/blog/2017/09/26/react-v16.0.html
class App extends Component {
	render() {
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Body array={generateMetrics()} />
				{footer()}
			</div>
		)
	}
}

export default App
