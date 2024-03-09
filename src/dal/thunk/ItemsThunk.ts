import {AppThunkType, StateType} from "bll/store";
import {ItemsApi} from "dal/api/items-api";
import {DataType, FieldDataType, FilterDataType, ItemsDataType} from "bll/types/api-types";
import {setItems} from "bll/actions/item-actions";
import {setError, setSpinner} from "bll/actions/app-actions";

export const GetItemsThunk = (itemData: ItemsDataType): AppThunkType => async (dispatch) => {
    dispatch(setSpinner(true))
    try {
        const res = await ItemsApi.getItems(itemData)

        dispatch(setItems(res.data.result))

    } catch (err) {
        console.log(err)
        dispatch(setError(true))
    } finally {
        dispatch(setSpinner(false))
    }
}
export const GetItemsIdThunk = (data: DataType): AppThunkType => async (dispatch) => {
    dispatch(setSpinner(true))
    try {
        const res = await ItemsApi.getItemsId(data)
        if (res.data.result) {
            const itemsData = {
                action: "get_items",
                params: {
                    ids: res.data.result
                }
            }
            dispatch(GetItemsThunk(itemsData))
        }

    } catch (err) {
        console.log(err)
        dispatch(setError(true))
    }
}


export const FilterItems = (filterData: FilterDataType): AppThunkType => async (dispatch) => {
    dispatch(setSpinner(true))
    try {
        const res = await ItemsApi.setFilter(filterData)
        if (res.data.result) {
            const itemsData = {
                action: "get_items",
                params: {
                    ids: res.data.result
                }
            }
            dispatch(GetItemsThunk(itemsData))
        }
    } catch (err) {
        console.log(err)
        dispatch(setError(true))
    } finally {
        dispatch(setSpinner(false))
    }
}
export const GetFieldsTitle = (fieldData: FieldDataType): AppThunkType =>

    async (dispatch, getState: () => StateType) => {

        dispatch(setSpinner(true))
        const orderData = getState()
        if (orderData) {
            if (getState().items.actions === 'product') {
                const data = {
                    action: 'filter',
                    params: {
                        product: getState().items.title
                    }
                }

                try {
                    const res = await ItemsApi.getFields(fieldData)
                    debugger
                    if (res.data.result) {
                        dispatch(FilterItems(data))
                    }
                } catch (err) {
                    console.log(err)
                    dispatch(setError(true))
                }
            } else if (getState().items.actions === 'price') {
                const dataValue = {
                    action: 'filter',
                    params: {
                        price: getState().items.value
                    }
                }

                try {
                    const res = await ItemsApi.getFields(fieldData)
                    debugger
                    if (res.data.result) {
                        dispatch(FilterItems(dataValue))
                    }
                } catch (err) {
                    console.log(err)
                    dispatch(setError(true))
                }
            } else if (getState().items.actions === 'brand') {
                const dataBrand = {
                    action: 'filter',
                    params: {
                        brand: getState().items.brand
                    }
                }
                try {
                    const res = await ItemsApi.getFields(fieldData)
                    debugger
                    if (res.data.result) {
                        dispatch(FilterItems(dataBrand))
                    }
                } catch (err) {
                    console.log(err)
                    dispatch(setError(true))
                }
            }
        }
    }


