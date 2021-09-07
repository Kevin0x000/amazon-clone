import { createStore,applyMiddleware } from "redux";
import reducers from "./index";
import thunk from "redux-thunk"

const store = createStore(
    reducers,
    // {}, //default state
    applyMiddleware(thunk)
)

export default store;