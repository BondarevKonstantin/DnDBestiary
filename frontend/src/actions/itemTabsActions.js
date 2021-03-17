import axios from "axios"
import {
  ITEM_TABS_ADD_ITEM,
  ITEM_TABS_REMOVE_ITEM,
} from "../constants/itemTabsConstants"

export const addItemToTabs = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/items/${id}`)

  dispatch({
    type: ITEM_TABS_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
    },
  })

  localStorage.setItem(
    "itemTabsItems",
    JSON.stringify(getState().itemTabs.itemTabsItems)
  )
}

export const removeItemFromTabs = (id) => (dispatch, getState) => {
  dispatch({
    type: ITEM_TABS_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem(
    "itemTabsItems",
    JSON.stringify(getState().itemTabs.itemTabsItems)
  )
}
