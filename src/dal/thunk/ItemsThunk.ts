import {AppThunkType} from "bll/store";
import {ItemsApi} from "dal/api/items-api";
import {DataType, ErrorType, ItemsDataType} from "bll/types/api-types";
import {setItems, setItemsId} from "bll/actions/item-actions";
import {setSpinner} from "bll/actions/app-actions";

export const GetItemsThunk =(itemData:ItemsDataType):AppThunkType=>async (dispatch )=>{
    dispatch(setSpinner(true))
try{
   const res = await ItemsApi.getItems(itemData)

    dispatch(setItems(res.data.result))

}catch (err){
   console.log(err)
}finally {
    dispatch(setSpinner(false))
}
}
export const GetItemsIdThunk = (data: DataType): AppThunkType => async (dispatch) => {
    dispatch(setSpinner(true))
    try {
        const res = await ItemsApi.getItemsId(data)
        if(res.data.result){
           const itemsData = {
               action: "get_items",
               params: {
                   ids: res.data.result
               }
           }
            dispatch(setItemsId(res.data.result))
            dispatch(GetItemsThunk(itemsData))
        }


        console.log(res)
    } catch (err) {
        console.log(err)
    }finally {
        // dispatch(setSpinner(false))
    }
}
