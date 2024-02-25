import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {GoodsReducer} from "bll/reducers/GoodsReducer";

const rootReducer = combineReducers({
    goods:GoodsReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))
