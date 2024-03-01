import {SetSpinnerType} from "bll/actions/app-actions";

export const appReducerState = {
    isLoading: false
}
export type AppReducerType = {
    isLoading: boolean
}
export type AppReducerActionType = SetSpinnerType
export const AppReducer = (state: AppReducerType = appReducerState, action: AppReducerActionType): AppReducerType => {
    switch (action.type) {
        case "SET-SPINNER": {
            return {...state, isLoading: action.value}
        }
        default:
            return state
    }
}
