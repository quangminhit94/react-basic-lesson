import React, { Component } from 'react'

export default class Container1 extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    console.log(props)
    this.state = {
      mystate: "My State"
    }
  }
  
  changeState = () => {
    this.setState({mystate: "My new state"})
  }
  render() {
    return (
      <div>
        <button onClick={this.changeState}>Change state</button>
        {this.state.mystate}
      </div>
    )
  }
}

