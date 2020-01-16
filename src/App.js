
import React, { Component } from 'react'

class App extends Component {

  render() {
    const var1 = {
      key1: 'some data'
    }
    return (
      <div className="App">
        {React.createElement(
          'div',
          {className: 'app'},
          JSON.stringify(var1)
        )}        
      </div>
    )
  }
}

export default App;
