import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

class IndecisionApp extends React.Component {

  state = {
    options: []
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

  handlePick = () => {
    const randomOption = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomOption])
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid task!'
    } else if (this.state.options.indexOf(option) != -1) {
      return 'This task already exists!'
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))

  }

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }

  handleRemoveOption = (optionToRemove) => {
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

export default IndecisionApp;