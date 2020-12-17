import {
  CREATURE_LIST_REQUEST,
  CREATURE_LIST_SUCCESS,
  CREATURE_LIST_FAIL,
} from "../constants/creatureConstants"

export const creatureListReducer = (state = { creatures: [] }, action) => {
  switch (action.type) {
    case CREATURE_LIST_REQUEST:
      return { loading: true, creatures: [] }
    case CREATURE_LIST_SUCCESS:
      return { loading: false, creatures: action.payload }
    case CREATURE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
