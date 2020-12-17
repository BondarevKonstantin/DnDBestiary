import {
  SPELL_TABS_ADD_ITEM,
  SPELL_TABS_REMOVE_ITEM,
} from "../constants/spellTabsConstants"

export const spellTabsReducer = (state = { spellTabsItems: [] }, action) => {
  switch (action.type) {
    case SPELL_TABS_ADD_ITEM:
      const item = action.payload

      const existItem = state.spellTabsItems.find((x) => x.id === item.id)

      if (existItem) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          spellTabsItems: [...state.spellTabsItems, item],
        }
      }
    case SPELL_TABS_REMOVE_ITEM:
      return {
        ...state,
        spellTabsItems: state.spellTabsItems.filter(
          (x) => x.id !== action.payload
        ),
      }
    default:
      return state
  }
}
