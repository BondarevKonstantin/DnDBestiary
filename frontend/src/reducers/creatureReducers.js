import {
  CREATURE_LIST_REQUEST,
  CREATURE_LIST_SUCCESS,
  CREATURE_LIST_FAIL,
  CREATURE_DETAILS_REQUEST,
  CREATURE_DETAILS_SUCCESS,
  CREATURE_DETAILS_FAIL,
  CREATURE_DELETE_REQUEST,
  CREATURE_DELETE_SUCCESS,
  CREATURE_DELETE_FAIL,
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

export const creatureDetailsReducer = (
  state = {
    creature: {
      sav: [],
      abilities: [],
      skills: [],
      sense: [],
      languages: [],
      actions: [],
    },
  },
  action
) => {
  switch (action.type) {
    case CREATURE_DETAILS_REQUEST:
      return { loading: true, ...state }
    case CREATURE_DETAILS_SUCCESS:
      return { loading: false, creature: action.payload }
    case CREATURE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const creatureDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATURE_DELETE_REQUEST:
      return { loading: true }
    case CREATURE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case CREATURE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
