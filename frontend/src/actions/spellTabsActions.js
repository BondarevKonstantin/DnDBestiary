import axios from "axios"
import {
  SPELL_TABS_ADD_ITEM,
  SPELL_TABS_REMOVE_ITEM,
} from "../constants/spellTabsConstants"

export const addSpellToTabs = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/spells/${id}`)

  dispatch({
    type: SPELL_TABS_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
    },
  })

  localStorage.setItem(
    "spellTabsItems",
    JSON.stringify(getState().spellTabs.spellTabsItems)
  )
}

export const removeSpellFromTabs = (id) => (dispatch, getState) => {
  dispatch({
    type: SPELL_TABS_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem(
    "spellTabsItems",
    JSON.stringify(getState().spellTabs.spellTabsItems)
  )
}
