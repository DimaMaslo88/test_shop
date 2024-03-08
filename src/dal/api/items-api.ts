import {instance} from "dal/instance";
import {
    DataType,
    FieldDataType, FilterDataType,
    getFieldsType,
    getItemsIdsType,
    getItemsType,
    ItemsDataType
} from "bll/types/api-types";

export const ItemsApi={
    getItemsId(data:DataType){
        return instance.post<getItemsIdsType>('',data)
    },
    getItems(itemData:ItemsDataType){
        return instance.post<getItemsType>('',itemData)
    },
    getFields(fieldData:FieldDataType){
        return instance.post<getFieldsType>('',fieldData)
    },
    setFilter(filterData:FilterDataType){
return instance.post<getItemsIdsType>('',filterData)
    }
}
