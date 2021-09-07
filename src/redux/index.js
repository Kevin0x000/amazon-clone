// import {createStore, applyMiddleware} from 'redux'

// import basket from './reducers/basketReducer'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'

// export default createStore(basket,composeWithDevTools(applyMiddleware(thunk)))


import { combineReducers } from "redux";
// import thunk from "redux-thunk";
import basketReducer from "./reducers/basketReducer"

const reducers = combineReducers({
    basket:basketReducer
})

export default reducers