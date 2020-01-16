
import React, { Component } from 'react'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

class App extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({counter: 5})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Increase</button>
        <div>
          {this.state.counter} 
          Only content here will be changed
        </div>
        <div>
          Content 1 // React framework not change this
        </div>
        <div>
          Content 2 // React framework not change this
        </div>

      </div>
    )
  }
}


export default App;
