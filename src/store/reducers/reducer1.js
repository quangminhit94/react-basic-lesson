import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  isAuthenticated: false,
}

const Reducer1 = (state = initialState, action) => {
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

export default Reducer1