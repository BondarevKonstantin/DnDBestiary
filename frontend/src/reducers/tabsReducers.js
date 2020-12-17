import { TABS_ADD_ITEM } from "../constants/tabsConstants"

export const tabsReducer = (state = { tabsItems: [] }, action) => {
  switch (action.type) {
    case TABS_ADD_ITEM:
      const item = action.payload

      const existItem = state.tabsItems.find((x) => x.product === item.product)

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
    default:
      return state
  }
}
