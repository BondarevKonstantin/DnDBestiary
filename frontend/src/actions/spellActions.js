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
  SPELL_CREATE_REQUEST,
  SPELL_CREATE_SUCCESS,
  SPELL_CREATE_FAIL,
  SPELL_UPDATE_FAIL,
  SPELL_UPDATE_SUCCESS,
  SPELL_UPDATE_REQUEST,
} from "../constants/spellConstants"

import { logout } from "./userActions"

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

export const listSpellDetails = (id) => async (dispatch) => {
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

export const createSpell = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPELL_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/spells`, {}, config)

    dispatch({
      type: SPELL_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === "Not authorized, token failed") {
      dispatch(logout())
    }
    dispatch({
      type: SPELL_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateSpell = (spell) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPELL_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/spells/${spell._id}`, spell, config)

    dispatch({
      type: SPELL_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: SPELL_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === "Not authorized, token failed") {
      dispatch(logout())
    }
    dispatch({
      type: SPELL_UPDATE_FAIL,
      payload: message,
    })
  }
}
