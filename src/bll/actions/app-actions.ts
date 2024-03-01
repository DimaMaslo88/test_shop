export type SetSpinnerType = ReturnType<typeof setSpinner>
export const setSpinner = (value:boolean)=>{
    return {
        type:"SET-SPINNER",
        value
    }as const
}
