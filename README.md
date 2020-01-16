# Modern React with Redux

## 1. Getting Started with create react app

## 2. JSX Overview

## 3. Displaying variables in JSX

## 4. Understanding Class and Function Scopes

## 5. How extends Component works

- Extends is es6 syntax for class inheritance of the React Component class
  
  ```js
  class App extends Component
  ```

- How react class component works? When using extends the class App will inherit predefined properties from React

## 6. Styling patterns in React

- inline styling
  
  `App.js`
  
  ```js
  render() {
    const styles = {
      border: 'solid'
      textAlign: 'center'
    }
    return (
     <div style={styles}>
      Style
     </div>
    )
  }
  ```

- File styling
  
  Create style file `styles.js`

  ```js
  export const const styles = {
    border: 'solid'
    textAlign: 'center'
  }
  ```

  Apply styles to `App.js`

  ```js
  import * as styles from './styles'

  render() {
    return (
     <div style={styles.styles}>
      Style
     </div>
    )
  }
  ```

## 7. React Under the Hood the Virtual DOM

- How does React works?
  
  ```js
  render() {
    return (
     <div className="App">
      {React.createElement(
        'button',
        {className: 'App'},
        "React"
      )}
     </div>
    )
  }
  ```

- React uses what we called virtual DOM which is essentially converted JSX code to normal create element function thank to Babel plugin from Webpack.
- Babel will convert ES6 to ES5 for browser because browser can not read ES6 syntax.
- When Single React App load, the DOM elements always stay the same. Only the code within the div id=root changes.
- When user click, or interact with a div. Only that div change
  
  ```js
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
  ```

### Traditional vs SPA Routing

| Traditional Routing | Single Page App Routing |
|---|---|
| - Multiple HTMl files | - Single HTML file |
| - New server Request with each router change | - Only 1 server request for initial website loading |
| - Browser reload on each route change | - Browser does not reload with route change |
| - Relative slower performance | - Very fast performance |

## 8. Displaying Objects in JSX

- Object can not read in this case: ERROR child of the div element can not be an object
  
  ```js
  render() {
    const var1 = {
      key1: 'some data'
    }
    return (
      <div className="App">
        {var1} //Error: Objects are not valid as a React child
        JSON.stringify(var1) // {"key1":"some data"}
        {var1.key1} // some data
      </div>
    )
  }
  ```

## 9. Props

- Short for properties
- Functionally Components: Accessed with the syntax "`props`". (name of user defined property)
- Class Components: Accessed with the syntax "`this.props`". (name of user defined property)
- Part of the 1 way data binding pattern
- `props` means Read Only
  
## 10. Components

Component in React determine essentially what the user see on the screen in the browser

| Functional Components | Class Components |
|---|---|
|- Set up usually as an arrow function | - Set up as an ES6 JS Class |
| - Return JSX directly | - Also referred to as containers |
| - Not aware of state | - Have a render function that returns JSX |
| - Can have optional props | - Aware of state |
|  | - Can have optional props |
