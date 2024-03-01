export type DataType ={
    action: string,
    params: {
        offset?:number,
        limit?: number
    }
}
export type ItemsDataType = {
    action: string,
    params: {
       ids:string[]
    }
}


// response type
export type getItemsIdsType={
    result:string[]

}
export type ErrorType={
    status:number
    statusText:string
}
