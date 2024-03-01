import {ItemsReducerType} from "bll/types/bll-types";
import {SetItemsIdType} from "bll/actions/item-actions";

export const ItemsReducerState = {
    items:[
        {
        brand: null,
        id: "1789ecf3-f81c-4f49-ada2-83804dcc74b0",
        price: 16700.0,
        product: "Золотое кольцо с бриллиантами"
    }
    ],
    itemsId:[]
}
export type ItemsReducerActionsType = SetItemsIdType

export const ItemsReducer =(state:ItemsReducerType=ItemsReducerState,action:ItemsReducerActionsType):ItemsReducerType=>{
    switch (action.type){
        case "SET-ITEMS-ID":{
            return {...state,itemsId:[...state.itemsId,...action.ids]}
        }
        default:
            return state
    }
}
