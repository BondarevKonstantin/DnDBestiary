import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  creatureListReducer,
  creatureDetailsReducer,
} from "./reducers/creatureReducers"
import { tabsReducer } from "./reducers/tabsReducers"

const reducer = combineReducers({
  creatureList: creatureListReducer,
  creatureDetails: creatureDetailsReducer,
  tabs: tabsReducer,
})

const tabsItemsFromStorage = localStorage.getItem("tabsItems")
  ? JSON.parse(localStorage.getItem("tabsItems"))
  : []

const initialState = {
  tabs: { tabsItems: tabsItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
