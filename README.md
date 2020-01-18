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

