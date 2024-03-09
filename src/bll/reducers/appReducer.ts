import {SetErrorType, SetRequestCounterType, SetSpinnerType} from "bll/actions/app-actions";
import {AppReducerType} from "bll/types/bll-types";

export const appReducerState = {
    isLoading: false,
    isError:false,
    requestCounter:0

}

export type AppReducerActionType = SetSpinnerType|
    SetErrorType
|SetRequestCounterType
export const AppReducer = (state: AppReducerType = appReducerState, action: AppReducerActionType): AppReducerType => {
    switch (action.type) {
        case "SET-SPINNER": {
            return {...state, isLoading: action.value}
        }
        case "SET-ERROR":{
            return {...state,isError:action.isError}
        }
        case "SET-REQUEST-COUNTER":{
            return {...state,requestCounter:action.count}
        }
        default:
            return state
    }
}
