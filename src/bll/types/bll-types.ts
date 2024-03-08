// items types
export type SingleItemType = {

    brand: null | string
    id: string,
    price: null | number
    product: string


}
export type ItemsReducerType = {
    items: SingleItemType[]
    page:number
    elementsOnPage:number
    value:number
    title:string
    actions:string
    brand:string
   // itemsId: string[]
}
