import {ItemsReducerType, SingleItemType} from "bll/types/bll-types";
import {SetCurrentPageType, SetItemsType} from "bll/actions/item-actions";

export const ItemsReducerState = {
    items:[
        { } as SingleItemType
    ],
    page:1,
    elementsOnPage:50
    // itemsId:[]
}
export type ItemsReducerActionsType = SetItemsType|
    SetCurrentPageType



export const ItemsReducer =(state:ItemsReducerType=ItemsReducerState,action:ItemsReducerActionsType):ItemsReducerType=>{
    switch (action.type){
        // case "SET-ITEMS-ID":{
        //     return {...state,itemsId:[...state.itemsId,...action.ids]}
        // }
        case "SET-ITEMS":{
            return {...state,items:[...state.items,...action.items]}
        }
        case "SET-CURRENT-PAGE":{
            return {...state,page:action.page}
        }
        default:
            return state
    }
}
