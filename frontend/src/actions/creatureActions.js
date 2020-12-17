import axios from "axios"

import {
  CREATURE_LIST_REQUEST,
  CREATURE_LIST_SUCCESS,
  CREATURE_LIST_FAIL,
  CREATURE_DETAILS_REQUEST,
  CREATURE_DETAILS_SUCCESS,
  CREATURE_DETAILS_FAIL,
} from "../constants/creatureConstants"

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

export const listCreaturesDetails = (id) => async (dispatch) => {
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
