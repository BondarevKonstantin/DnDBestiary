import { TABS_ADD_ITEM, TABS_REMOVE_ITEM } from "../constants/tabsConstants"

export const tabsReducer = (state = { tabsItems: [] }, action) => {
  switch (action.type) {
    case TABS_ADD_ITEM:
      const item = action.payload

      const existItem = state.tabsItems.find((x) => x.id === item.id)

      if (existItem) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          tabsItems: [...state.tabsItems, item],
        }
      }
    case TABS_REMOVE_ITEM:
      return {
        ...state,
        tabsItems: state.tabsItems.filter((x) => x.id !== action.payload),
      }
    default:
      return state
  }
}
