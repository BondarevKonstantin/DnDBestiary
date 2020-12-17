import axios from "axios"
import { TABS_ADD_ITEM } from "../constants/tabsConstants"

export const addToTabs = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/creatures/${id}`)

  dispatch({
    type: TABS_ADD_ITEM,
    payload: {
      ...data,
    },
  })

  localStorage.setItem("tabsItems", JSON.stringify(getState().tabs.tabsItems))
}
