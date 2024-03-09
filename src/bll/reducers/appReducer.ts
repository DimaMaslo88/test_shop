import {SetErrorType, SetSpinnerType} from "bll/actions/app-actions";
import {AppReducerType} from "bll/types/bll-types";

export const appReducerState = {
    isLoading: false,
    isError:false

}

export type AppReducerActionType = SetSpinnerType|
    SetErrorType
export const AppReducer = (state: AppReducerType = appReducerState, action: AppReducerActionType): AppReducerType => {
    switch (action.type) {
        case "SET-SPINNER": {
            return {...state, isLoading: action.value}
        }
        case "SET-ERROR":{
            return {...state,isError:action.isError}
        }
        default:
            return state
    }
}
