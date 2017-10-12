/*
 * Step 1: Understand how to control an <input/> form
 */

class ControlledInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text : ""
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const newText = e.target.value
    this.setState({text : newText})
  }

  render() {
    return <input type="text" value={this.state.text} onChange={this.onChange} />
  }
}

/*
 * Step 2: Understand how to pass down state to a controlled component
 */

// Since we don't need any logic or internal state for our input,
// it can be a pure functional component.
// Pure functional components are attached to a const.

const ControlledInput = (props) => (
    <input type={props.controlledType} value={props.controlledValue} onChange={props.controlledOnChange} />
)

class ParentOfControlledInputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text : ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const newText = e.target.value
    this.setState({text : newText})
  }

  render() {
    return (
      <ControlledInput controlledType='text' controlledValue={this.state.text} controlledOnChange={this.onChange} />
    )
  }
}


/*
 * Step 3: Add name property to each input and use that to set [e.target.name] using the same onChange function
 */

 const ControlledInput = (props) => (
    <input
        name={props.controlledName}
        type={props.controlledType}
        value={props.controlledValue}
        onChange={props.controlledOnChange}
    />
)

class ParentOfControlledInputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo : '',
      bar : '',
      boobs: '',
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    let newText = e.target.value
    this.setState({[e.target.name] : newText})
  }
  render() {
    return (
        <div>
            <ControlledInput
                controlledName='foo'
                controlledType='text'
                controlledValue={this.state.foo}
                controlledOnChange={this.onChange}
            />
            <ControlledInput
                controlledName='bar'
                controlledType='text'
                controlledValue={this.state.bar}
                controlledOnChange={this.onChange}
            />
            <ControlledInput
                controlledName='boobs'
                controlledType='text'
                controlledValue={this.state.boobs}
                controlledOnChange={this.onChange}
            />
        </div>
    )
  }
}