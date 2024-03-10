import {StateType} from "bll/store";
import {createSelector} from "reselect";



const selectProducts = (state: StateType) => state.items.items
export const selectSpinner = (state: StateType): boolean => state.app.isLoading
export const selectItems = createSelector(
    [selectProducts],
    (products) => {
        return products.filter((product, index, self) =>
                index === self.findIndex((p) => (
                    p.id === product.id
                ))
        )
    }
);
export const selectCurrenPage=(state:StateType):number=>state.items.page
export const selectElementsOnPage =(state:StateType):number=>state.items.elementsOnPage
export const selectValue = (state:StateType):number=>state.items.value
export const selectActions = (state:StateType):string=>state.items.actions
export const selectIsError =(state:StateType):boolean=>state.app.isError
export const selectRequestCounter=(state:StateType):number=>state.app.requestCounter
