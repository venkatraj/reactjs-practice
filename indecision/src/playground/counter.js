class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
    this.state = {
      count: props.count
    }
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count')
      const count = parseInt(stringCount)
      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState.count) {
      const data = this.state.count
      localStorage.setItem('count', data)
    }
  }

  decrementCounter() {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  resetCounter() {
    this.setState(() => ({ count: 0 }))
  }

  incrementCounter() {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={this.decrementCounter}
        >
          -1
        </button>
        <button
          onClick={this.resetCounter}
        >
          Reset
        </button>
        <button
          onClick={this.incrementCounter}
        >
          +1
        </button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 25
}

ReactDOM.render(<Counter />, document.getElementById('app'))