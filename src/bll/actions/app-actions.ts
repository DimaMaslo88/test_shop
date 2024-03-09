export type SetSpinnerType = ReturnType<typeof setSpinner>
export const setSpinner = (value:boolean)=>{
    return {
        type:"SET-SPINNER",
        value
    }as const
}
export type SetErrorType = ReturnType<typeof setError>
export const setError = (isError:boolean)=>{
    return {
        type:"SET-ERROR",
        isError
    }as const
}
export type SetRequestCounterType = ReturnType<typeof setRequestCounter>
export const setRequestCounter = (count:number)=>{
    return {
        type:"SET-REQUEST-COUNTER",
        count
    }as const
}
