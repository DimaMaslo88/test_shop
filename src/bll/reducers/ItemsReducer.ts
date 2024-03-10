import {ItemsReducerType, SingleItemType} from "bll/types/bll-types";
import {
    ChangeFilterActionsType, ChangeFilterBrandType,
    ChangeFilterTitleType,
    ChangeFilterValueType,
    SetCurrentPageType,
    SetItemsType
} from "bll/actions/item-actions";

export const ItemsReducerState = {
    items: [
        {} as SingleItemType
    ],
    page: 1,
    elementsOnPage: 50,
    value: 0,
    title: '',
    actions:'',
    brand:''
    // itemsId:[]
}
export type ItemsReducerActionsType = SetItemsType |
    SetCurrentPageType
    | ChangeFilterValueType
    | ChangeFilterTitleType
|ChangeFilterActionsType
|ChangeFilterBrandType


export const ItemsReducer = (state: ItemsReducerType = ItemsReducerState, action: ItemsReducerActionsType): ItemsReducerType => {
    switch (action.type) {
        case "SET-ITEMS": {
            return {...state, items: action.items}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, page: action.page}
        }
        case "CHANGE-FILTER-VALUE": {
            return {...state, value: action.value}
        }
        case "CHANGE-FILTER-TITLE":{
            return {...state,title:action.title}
        }
        case 'CHANGE-FILTER-ACTIONS':{
            return {...state,actions:action.action}
        }
        case "CHANGE-FILTER-BRAND":{
            return {...state,brand:action.value}
        }
        default:
            return state
    }
}
