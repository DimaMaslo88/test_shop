import {StateType} from "bll/store";
import {SingleItemType} from "bll/types/bll-types";
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
