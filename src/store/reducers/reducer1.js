import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  isAuthenticated: false,
  user_text: ''
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
    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        user_text: action.payload
      }
    default:
      return state
  }
}

export default rootReducer