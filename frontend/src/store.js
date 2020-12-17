import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  creatureListReducer,
  creatureDetailsReducer,
} from "./reducers/creatureReducers"

const reducer = combineReducers({
  creatureList: creatureListReducer,
  creatureDetails: creatureDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
