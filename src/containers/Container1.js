import React, { Component } from 'react'
import {Component1} from '../functional/Component1'
export default class Container1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mystate: 5,
      mysecondstate: "My State"
    }
  }
  
  render() {
    return (
      <div>
        <Component1 prop1={this.state.mysecondstate}></Component1>
      </div>
    )
  }
}

