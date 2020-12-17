import axios from "axios"

import {
  SPELL_LIST_REQUEST,
  SPELL_LIST_SUCCESS,
  SPELL_LIST_FAIL,
  SPELL_DETAILS_REQUEST,
  SPELL_DETAILS_SUCCESS,
  SPELL_DETAILS_FAIL,
} from "../constants/spellConstants"

export const listSpells = () => async (dispatch) => {
  try {
    dispatch({ type: SPELL_LIST_REQUEST })

    const { data } = await axios.get("/api/spells")

    dispatch({
      type: SPELL_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SPELL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listSpellsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SPELL_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/spells/${id}`)

    dispatch({
      type: SPELL_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SPELL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
