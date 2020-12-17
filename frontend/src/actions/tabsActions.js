import axios from "axios"
import { TABS_ADD_ITEM, TABS_REMOVE_ITEM } from "../constants/tabsConstants"

export const addToTabs = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/creatures/${id}`)

  dispatch({
    type: TABS_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
    },
  })

  localStorage.setItem("tabsItems", JSON.stringify(getState().tabs.tabsItems))
}

export const removeFromTabs = (id) => (dispatch, getState) => {
  dispatch({
    type: TABS_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("tabsItems", JSON.stringify(getState().tabs.tabsItems))
}
