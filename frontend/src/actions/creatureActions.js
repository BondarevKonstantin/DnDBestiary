import axios from "axios"

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
  CREATURE_CREATE_REQUEST,
  CREATURE_CREATE_SUCCESS,
  CREATURE_CREATE_FAIL,
  CREATURE_UPDATE_FAIL,
  CREATURE_UPDATE_SUCCESS,
  CREATURE_UPDATE_REQUEST,
} from "../constants/creatureConstants"

import { logout } from "./userActions"

export const listCreatures = () => async (dispatch) => {
  try {
    dispatch({ type: CREATURE_LIST_REQUEST })

    const { data } = await axios.get("/api/creatures")

    dispatch({
      type: CREATURE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATURE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listCreatureDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CREATURE_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/creatures/${id}`)

    dispatch({
      type: CREATURE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATURE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteCreature = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATURE_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/creatures/${id}`, config)

    dispatch({
      type: CREATURE_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: CREATURE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createCreature = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATURE_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/creatures`, {}, config)

    dispatch({
      type: CREATURE_CREATE_SUCCESS,
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
      type: CREATURE_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateCreature = (creature) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATURE_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/creatures/${creature._id}`,
      creature,
      config
    )

    dispatch({
      type: CREATURE_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: CREATURE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === "Not authorized, token failed") {
      dispatch(logout())
    }
    dispatch({
      type: CREATURE_UPDATE_FAIL,
      payload: message,
    })
  }
}
