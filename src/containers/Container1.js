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
  render() {
    return (
      <div>
        {/* {this.props.nickname} */}
        {this.state.mystate}
      </div>
    )
  }
}

