export type DataType = {
    action: string,
    params: {
        offset?: number,
        limit?: number
    }
}
export type ItemsDataType = {
    action: string,
    params: {
        ids: string[]
    }
}
export type FieldDataType = {
    action: string
    params: {
        field: string,
        offset?: number,
        limit?: number
    }
}
export type FilterDataType={
    action:string,
    params:{
        price?:number,
         product?:string,
         brand?:null|string
       // field:number|string
    }
}


// RESPONSE TYPES
// типизация возвращаемого значения, по запросу id
export type getItemsIdsType = {
    result: string[]

}
// типизация  возвращаемого значения, по запросу fields
export type getFieldsType = {
    result: string | number
}
export type getFieldType={

}
// типизация возвращаемого значения, по запросу items
export type getItemsType = {
    result: getItemType[]
}
export type getItemType = {
    brand: null | string
    id: string,
    price: null | number,
    product: string
}
// типизация error
export type ErrorType = {
    status: number
    statusText: string
}
