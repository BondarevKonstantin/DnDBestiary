import axios from "axios"

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

export const deleteSpell = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPELL_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/spells/${id}`, config)

    dispatch({
      type: SPELL_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: SPELL_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
