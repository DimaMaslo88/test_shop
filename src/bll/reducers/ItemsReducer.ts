import {ItemsReducerType, SingleItemType} from "bll/types/bll-types";
import {SetItemsIdType, SetItemsType} from "bll/actions/item-actions";

export const ItemsReducerState = {
    items:[
        { } as SingleItemType
    ],
    itemsId:[]
}
export type ItemsReducerActionsType = SetItemsIdType|
    SetItemsType


export const ItemsReducer =(state:ItemsReducerType=ItemsReducerState,action:ItemsReducerActionsType):ItemsReducerType=>{
    switch (action.type){
        case "SET-ITEMS-ID":{
            return {...state,itemsId:[...state.itemsId,...action.ids]}
        }
        case "SET-ITEMS":{
            return {...state,items:[...state.items,...action.items]}
        }
        default:
            return state
    }
}
