import {SingleItemType} from "bll/types/bll-types";

// export type SetItemsIdType= ReturnType<typeof setItemsId>
// export const setItemsId =(ids:string[])=>{
//     return{
//         type:'SET-ITEMS-ID',
//         ids
//     }as const
// }
export type SetItemsType = ReturnType<typeof setItems>
export const setItems = (items:SingleItemType[])=>{
    return {
        type:"SET-ITEMS",
        items
    }as const
}
