import React, { Component } from 'react'

export default class Container1 extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    console.log(props)
    this.state = {
      mystate: 5
    }
  }
  
  changeState = () => {
    this.setState({mystate: this.state.mystate + 1})
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

