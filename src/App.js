
import React, { Component } from 'react'

import { Component1 } from './functional/Component1'
import Container1 from './containers/Container1'

class App extends Component {

  render() {
    return (
      <div className="App">
        React
        <Container1 nickname="Cat"></Container1>
        <Component1 name="moe" age="25"></Component1>
      </div>
    )
  }
}

export default App;
