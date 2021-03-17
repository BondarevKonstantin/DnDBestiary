import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  creatureListReducer,
  creatureDetailsReducer,
  creatureCreateReducer,
  creatureDeleteReducer,
  creatureUpdateReducer,
} from "./reducers/creatureReducers"
import {
  spellListReducer,
  spellDetailsReducer,
  spellCreateReducer,
  spellDeleteReducer,
  spellUpdateReducer,
} from "./reducers/spellReducers"
import {
  itemListReducer,
  itemDetailsReducer,
  itemCreateReducer,
  itemDeleteReducer,
  itemUpdateReducer,
} from "./reducers/itemReducers"
import { tabsReducer } from "./reducers/tabsReducers"
import { spellTabsReducer } from "./reducers/spellTabsReducers"
import { itemTabsReducer } from "./reducers/itemTabsReducers"
import { userLoginReducer } from "./reducers/userReducers"

const reducer = combineReducers({
  creatureList: creatureListReducer,
  creatureDetails: creatureDetailsReducer,
  creatureCreate: creatureCreateReducer,
  creatureDelete: creatureDeleteReducer,
  creatureUpdate: creatureUpdateReducer,
  spellList: spellListReducer,
  spellDetails: spellDetailsReducer,
  spellCreate: spellCreateReducer,
  spellDelete: spellDeleteReducer,
  spellUpdate: spellUpdateReducer,
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  itemCreate: itemCreateReducer,
  itemDelete: itemDeleteReducer,
  itemUpdate: itemUpdateReducer,
  tabs: tabsReducer,
  spellTabs: spellTabsReducer,
  itemTabs: itemTabsReducer,
  userLogin: userLoginReducer,
})

const tabsItemsFromStorage = localStorage.getItem("tabsItems")
  ? JSON.parse(localStorage.getItem("tabsItems"))
  : []

const spellTabsItemsFromStorage = localStorage.getItem("spellTabsItems")
  ? JSON.parse(localStorage.getItem("spellTabsItems"))
  : []

const itemTabsItemsFromStorage = localStorage.getItem("itemTabsItems")
  ? JSON.parse(localStorage.getItem("itemTabsItems"))
  : []

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  tabs: { tabsItems: tabsItemsFromStorage },
  spellTabs: { spellTabsItems: spellTabsItemsFromStorage },
  itemTabs: { itemTabsItems: itemTabsItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
