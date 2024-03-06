// items types
export type SingleItemType = {

    brand: null | string
    id: string,
    price: null | number
    product: string


}
export type ItemsReducerType = {
    items: SingleItemType[]
   // itemsId: string[]
}
