import axios from "axios"

import {
  CREATURE_LIST_REQUEST,
  CREATURE_LIST_SUCCESS,
  CREATURE_LIST_FAIL,
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
