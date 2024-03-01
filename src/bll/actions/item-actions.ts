export type SetItemsIdType= ReturnType<typeof setItemsId>
export const setItemsId =(ids:string[])=>{
    return{
        type:'SET-ITEMS-ID',
        ids
    }as const
}
