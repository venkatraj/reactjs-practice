class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleVisibility = this.handleVisibility.bind(this)
    this.state = {
      visible: false
    }
  }
  handleVisibility() {
    this.setState(prevState => ({
      visible: !prevState.visible
    }))
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && <p>Here are some secret details</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))