import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  creatureListReducer,
  creatureDetailsReducer,
} from "./reducers/creatureReducers"
import { spellListReducer, spellDetailsReducer } from "./reducers/spellReducers"
import { tabsReducer } from "./reducers/tabsReducers"
import { spellTabsReducer } from "./reducers/spellTabsReducers"
import { userLoginReducer } from "./reducers/userReducers"

const reducer = combineReducers({
  creatureList: creatureListReducer,
  creatureDetails: creatureDetailsReducer,
  spellList: spellListReducer,
  spellDetails: spellDetailsReducer,
  tabs: tabsReducer,
  spellTabs: spellTabsReducer,
  userLogin: userLoginReducer,
})

const tabsItemsFromStorage = localStorage.getItem("tabsItems")
  ? JSON.parse(localStorage.getItem("tabsItems"))
  : []

const spellTabsItemsFromStorage = localStorage.getItem("spellTabsItems")
  ? JSON.parse(localStorage.getItem("spellTabsItems"))
  : []

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  tabs: { tabsItems: tabsItemsFromStorage },
  spellTabs: { spellTabsItems: spellTabsItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
