import {StateType} from "bll/store";
import {SingleItemType} from "bll/types/bll-types";

// export const selectItemsId =(state:StateType):string[]=>state.items.itemsId
export const selectSpinner = (state: StateType): boolean => state.app.isLoading
export const selectItems = (state: StateType): SingleItemType[] => state.items.items
