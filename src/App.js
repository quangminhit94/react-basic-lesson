
import React, { Component } from 'react'

import { Component1 } from './functional/Component1'
class App extends Component {

  render() {
    return (
      <div className="App">
        React
        <Component1 name="moe" age="25"></Component1>
      </div>
    )
  }
}

export default App;
