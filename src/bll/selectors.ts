import {StateType} from "bll/store";

// export const selectItemsId =(state:StateType):string[]=>state.items.itemsId
export const selectSpinner = (state:StateType):boolean=>state.app.isLoading
