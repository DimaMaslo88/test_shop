import {SingleItemType} from "bll/types/bll-types";

export type SetItemsType = ReturnType<typeof setItems>
export const setItems = (items: SingleItemType[]) => {
    return {
        type: "SET-ITEMS",
        items
    } as const
}
export type ChangeFilterValueType = ReturnType<typeof changeFilterValue>
export const changeFilterValue = (value: number) => {
    return {
        type: "CHANGE-FILTER-VALUE",
       value
    } as const
}
export type ChangeFilterBrandType = ReturnType<typeof changeFilterBrand>
export const changeFilterBrand = (value: string) => {
    return {
        type: "CHANGE-FILTER-BRAND",
        value
    } as const
}
export type ChangeFilterTitleType = ReturnType<typeof changeFilterTitle>
export const changeFilterTitle = (title: string) => {
    return {
        type: "CHANGE-FILTER-TITLE",
       title
    } as const
}
export type ChangeFilterActionsType = ReturnType<typeof changeFilterActions>
export const changeFilterActions = (action: string) => {
    return {
        type: "CHANGE-FILTER-ACTIONS",
        action
    } as const
}
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({
    type: 'SET-CURRENT-PAGE',
    page
} as const)
