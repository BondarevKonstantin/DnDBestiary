import {
  ITEM_TABS_ADD_ITEM,
  ITEM_TABS_REMOVE_ITEM,
} from "../constants/itemTabsConstants"

export const itemTabsReducer = (state = { itemTabsItems: [] }, action) => {
  switch (action.type) {
    case ITEM_TABS_ADD_ITEM:
      const item = action.payload

      const existItem = state.itemTabsItems.find((x) => x.id === item.id)

      if (existItem) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          itemTabsItems: [...state.itemTabsItems, item],
        }
      }
    case ITEM_TABS_REMOVE_ITEM:
      return {
        ...state,
        itemTabsItems: state.itemTabsItems.filter(
          (x) => x.id !== action.payload
        ),
      }
    default:
      return state
  }
}
