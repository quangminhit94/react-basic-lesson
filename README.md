# Modern React with Redux

## 28. 3 principles of Redux

|1st Principle | 2nd Principle | 3rd Principle |
|---|---|---|
|There is only one source of truth|State is read-only|Change are make with Pure Functions|

## 29. React Redux overview

||React|Redux|React-Redux|
|---|---|---|---|
|Update State|`this.setState()`|Dispatch actions to reducer `store.dispatch()`|`mapDispatchToProps()` `this.props.dispatch_action()` then dispatch actions to the reducer|
|Read State|`this.state.state_property`|`store.getState()`|`mapStateToProps()` `this.props.state_property`|

**We will use React-Redux library because it help us understand redux easier**

## 30. Actions

Now we discuss redux, redux has 2 main parts: Action and Reducer.

Actions is a javascript Object has 1 type property is one String, which describe how action update the state

- Redux specific
- Can be dispatched from React
- Describe what will happen to the state
- Have a require "type" property
- Can have any optional property

For example: **an action with type "login_success" might change a property of Redux state called isAuthenticated from false to true**

## 31. Action Creators

- Can dispatch action asynchronously
- A function which dispatches a normal action
- Allow for dynamically setting the payload property
- No changes required to the reducer
  
For example: If you want to **save the user input to the state**. You would **set up an action creator with an arrow function** like so:

`(user_input_text) => (type: "USER_INPUT", payload: (user_input_text) )`

## 32. Reducers

- Directly change redux state
- Must be "pure" or can NOT be async
- Take "state" and action as parameters
- Usually setup as a switch statement
- Each case statement has to match an action type

```js
case ACTION_TYPES.LOGIN_SUCCESS:
  return {
    ...state,
    isAuthenticated: true
  }
```

## 33. Setting up the actions and reducer

- Step 1: Create actions and action types

  `store/actions/action_types.js`

  ```js
  export const SUCCESS = 'SUCCESS'

  export const FAILURE = 'FAILURE'
  ```

  `store/actions/actions.js`

  ```js
  import * as ACTION_TYPES from './action_types'

  export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
  }

  export const FAILURE = {
    type: ACTION_TYPES.FAILURE
  }
  ```

- Step 2: Create a reducer
  
  `store/reducers/reducer1.js`

  ```js
  import * as ACTION_TYPES from '../actions/action_types'

  const initialState = {
    isAuthenticated: false
  }

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          isAuthenticated: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          isAuthenticated: false
        }
      default:
        return state
    }
  }

  export default rootReducer
  ```

## 34. Create Store

- Step 4: create Store
  
  `index.js`

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  import { Provider } from 'react-redux'
  import rootReducer from './store/reducers/reducer1'
  import { createStore } from 'redux'

  let store = createStore(rootReducer)

  ReactDOM.render(<Provider store={store}>
                    <App />
                  </Provider>, document.getElementById('root'));

  ```

## 35. Creating a react redux container

- Step 5:
  
  `Container1.js`

  ```js
  import React, { Component } from 'react'

  import * as ACTION_TYPES from '../store/actions/action_types'
  import * as ACTIONS from '../store/actions/actions'

  import { connect } from 'react-redux'

  class Container1 extends Component {

    render() {
      return (
        <div>
          <button onClick={console.log(this.state)}>Get State</button>
          <button onClick={console.log(this.state)}>Dispatch Action 1</button>
          <button onClick={console.log(this.state)}>Dispatch Action 2</button>
        </div>
      )
    }
  }

  function mapStateToProps(state) {

  }

  function mapDispatchToProps(dispatch) {

  }

  export default connect(mapStateToProps, mapDispatchToProps)(Container1)
  ```

## 36. mapStateToProps

- Essentially how to get State from Redux
- Property in return statement is user defined
- Set the value to `state.` (name of reducer if more than one) `.` (name of property from reducer)
- In React render method use `this.props.`name of property you set.

## 37. mapDispatchToProps

- How to change the state by dispatching actions
- Actions can be plain or async action creators
- Actions can have an optional payload
- To dispatch actions use the syntax `this.props.`name of the property you set.

## 38. The connect method

Connect React container with the Redux store

|Read and Dispatch Actions Container|Read Only Container|Dispatch Action Only Container|
|---|---|---|
|`connect(mapStateToProps, mapDispatchToProps)(Container)`|`connect(mapStateToProps)(Container)`|`connect(null, mapDispatchToProps)(Container)`|

## 39. Connecting a container to React Redux

- Step 6:

  ```js
  import React, { Component } from 'react'

  import * as ACTION_TYPES from '../store/actions/action_types'
  import * as ACTIONS from '../store/actions/actions'

  import { connect } from 'react-redux'

  class Container1 extends Component {
    
    render() {
      return (
        <div>
          <button onClick={() => console.log(this.props.isAuthenticated)}>Get State</button>
          <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
          <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.isAuthenticated
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      action1: () => dispatch(ACTIONS.SUCCESS),
      action2: () => dispatch(ACTIONS.FAILURE)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Container1)
  ```

## 40. Summarizing The Redux flow

## 41. Testing our React Redux container

## 42. Setting up action creators

- Step 7:

  `actions.js`

  ```js
  // action creators
  export const success = () => {
    return {
      type: ACTION_TYPES.SUCCESS
    }
  }

  export const failure = () => {
    return {
      type: ACTION_TYPES.FAILURE
    }
  }
  ```

  `Container1.js`

  ```js
  <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
  <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>

  function mapDispatchToProps(dispatch) {
    return {
      action1: () => dispatch(ACTIONS.SUCCESS),
      action2: () => dispatch(ACTIONS.FAILURE),
      action_creator1: () => dispatch(ACTIONS.success()),
      action_creator2: () => dispatch(ACTIONS.failure())
    }
  }
  ```