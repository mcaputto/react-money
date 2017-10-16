import React from 'react'


const Answers = props =>
    <div className="columns">
        <div className="column">
            <p>Your <strong>adjusted gross income</strong> is <span className="is-size-3">{props.grossIncome - props.deductions - props.exemptions}</span> and your <strong>taxable income</strong> is <span className="is-size-3">{props.grossIncome - props.deductions - props.exemptions - props.before}</span>.</p>
            <br/>
            <p className="subtitle is-4">Gross income</p>
            <p>As a percentage of your gross income, you paid <span className="is-size-3">0</span> in taxes, saved <span className="is-size-3">0</span>, and spent <span className="is-size-3">0</span>.</p>
            <br/>
            <p className="subtitle is-4">Net income</p>
            <p>As a percentage of your net income, you saved <span className="is-size-3">0</span> and spent <span className="is-size-3">0</span>.</p>
            <br/>
        </div>
    </div>

export default Answers
