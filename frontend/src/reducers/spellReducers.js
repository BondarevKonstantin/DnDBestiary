import {
  SPELL_LIST_REQUEST,
  SPELL_LIST_SUCCESS,
  SPELL_LIST_FAIL,
  SPELL_DETAILS_REQUEST,
  SPELL_DETAILS_SUCCESS,
  SPELL_DETAILS_FAIL,
  SPELL_DELETE_REQUEST,
  SPELL_DELETE_SUCCESS,
  SPELL_DELETE_FAIL,
  SPELL_CREATE_REQUEST,
  SPELL_CREATE_SUCCESS,
  SPELL_CREATE_FAIL,
  SPELL_CREATE_RESET,
  SPELL_UPDATE_REQUEST,
  SPELL_UPDATE_SUCCESS,
  SPELL_UPDATE_FAIL,
  SPELL_UPDATE_RESET,
} from "../constants/spellConstants"

export const spellListReducer = (state = { spells: [] }, action) => {
  switch (action.type) {
    case SPELL_LIST_REQUEST:
      return { loading: true, spells: [] }
    case SPELL_LIST_SUCCESS:
      return { loading: false, spells: action.payload }
    case SPELL_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const spellDetailsReducer = (
  state = {
    spell: {},
  },
  action
) => {
  switch (action.type) {
    case SPELL_DETAILS_REQUEST:
      return { loading: true, ...state }
    case SPELL_DETAILS_SUCCESS:
      return { loading: false, spell: action.payload }
    case SPELL_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const spellDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SPELL_DELETE_REQUEST:
      return { loading: true }
    case SPELL_DELETE_SUCCESS:
      return { loading: false, success: true }
    case SPELL_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const spellCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SPELL_CREATE_REQUEST:
      return { loading: true }
    case SPELL_CREATE_SUCCESS:
      return { loading: false, success: true, spell: action.payload }
    case SPELL_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case SPELL_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const spellUpdateReducer = (state = { spell: {} }, action) => {
  switch (action.type) {
    case SPELL_UPDATE_REQUEST:
      return { loading: true }
    case SPELL_UPDATE_SUCCESS:
      return { loading: false, success: true, spell: action.payload }
    case SPELL_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case SPELL_UPDATE_RESET:
      return { spell: {} }
    default:
      return state
  }
}
