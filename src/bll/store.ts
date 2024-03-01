import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ItemsReducer, ItemsReducerActionsType} from "bll/reducers/ItemsReducer";
import {useDispatch} from "react-redux";
import {AppReducer, AppReducerActionType} from "bll/reducers/appReducer";

const rootReducer = combineReducers({
    items:ItemsReducer,
    app:AppReducer
})
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    StateType,
    undefined,
    ActionStateType
    >;
export type AppDispatch = ThunkDispatch<
    StateType,
    undefined,
    ActionStateType
    >;
export type ActionStateType =ItemsReducerActionsType
|AppReducerActionType
export type StateType = ReturnType<typeof rootReducer>
export const useAppDispatch=():AppDispatch=>useDispatch<AppDispatch>()
export const store = createStore(rootReducer,applyMiddleware(thunk))
