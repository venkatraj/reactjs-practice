const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I Do?
        </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {
        props.options.length == 0 ? <p>Please add tasks to get started!</p> :
          <ul>
            {props.options.map((option, index) => (
              <Option
                key={index}
                option={option}
                handleRemoveOption={props.handleRemoveOption}
              />
            ))}
          </ul>
      }

    </div>
  );
}

const Option = (props) => {
  return (
    <li>
      {props.option} -&nbsp;
      <span
        onClick={(e) => {
          props.handleRemoveOption(props.option)
        }
        }
      >
        Remove
      </span>
    </li>
  );

}

class AddOption extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'))
      if (options) {
        this.setState({
          options
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const options = JSON.stringify(this.state.options)
      localStorage.setItem('options', options)
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount!!')
  }

  handlePick() {
    const randomOption = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomOption])
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid task!'
    } else if (this.state.options.indexOf(option) != -1) {
      return 'This task already exists!'
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))

  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }))
  }

  handleRemoveOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option != optionToRemove)
    }))
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer!'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

