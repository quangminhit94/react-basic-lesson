import React, { Component } from 'react'

export default class Container1 extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    console.log(props)
    this.state = {
      mystate: 5,
      mysecondstate: "My State"
    }
  }
  
  changeState = () => {
    this.setState({
      mystate: this.state.mystate + 1,
      mysecondstate: this.state.mysecondstate + " M"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.changeState}>Change state</button>
        <br/>
        {this.state.mystate}
        <br/>
        {this.state.mysecondstate}
      </div>
    )
  }
}

