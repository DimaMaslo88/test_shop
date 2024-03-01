import {instance} from "dal/instance";
import {DataType, getItemsIdsType, ItemsDataType} from "bll/types/api-types";

export const ItemsApi={
    getItemsId(data:DataType){
        return instance.post<getItemsIdsType>('',data)
    },
    getItems(itemData:ItemsDataType){
        return instance.post('',itemData)
    }
}
