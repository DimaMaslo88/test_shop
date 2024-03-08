import React, {ChangeEvent, useState} from 'react';
import {useSelector} from "react-redux";
import { selectCurrenPage, selectElementsOnPage, selectItems} from "bll/selectors";
import {SingleItemType} from "bll/types/bll-types";
import style from 'styles/itemsPage.module.scss'
import {ContentPagination} from "ui/component/pagination/pagination";
import {useAppDispatch} from "bll/store";
import {changeFilterActions, changeFilterBrand, changeFilterTitle, changeFilterValue} from "bll/actions/item-actions";

export const ItemsPage = React.memo(() => {
    const dispatch = useAppDispatch()
            const items = useSelector(selectItems)
            const currentPage = useSelector(selectCurrenPage)
            const elementOnPage = useSelector(selectElementsOnPage)
            const totalItems = items.length
            const lastItemsIndex = currentPage * elementOnPage
            const firstItemsIndex = lastItemsIndex - elementOnPage
            const currentItems = items.slice(firstItemsIndex, lastItemsIndex)

    const [title,setTitle]=useState<string>('')
    const [value,setValue]=useState<number>(0)
    const [brandValue,setBrandValue] =useState<string>('')
    const onChangeHandlerTitle=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onChangeHandlerValue=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(+e.currentTarget.value)
    }
    const onChangeHandlerBrand=(e:ChangeEvent<HTMLInputElement>)=>{
        setBrandValue(e.currentTarget.value)
    }

    const onClickHandlerTitle=()=>{
        debugger
        dispatch(changeFilterActions('product'))
        dispatch(changeFilterTitle(title))
        setTitle('')
                // dispatch(GetFieldsTitle(getField))
    }
        const onClickHandlerValue=()=>{
            debugger
            dispatch(changeFilterActions('price'))
            dispatch(changeFilterValue(value))
            setValue(0)
            // dispatch(GetFieldsTitle(getField))
        }
        const onClickHandlerBrand=()=>{
            debugger
            dispatch(changeFilterActions('brand'))
            dispatch(changeFilterBrand(brandValue))
            setBrandValue('')
            // dispatch(GetFieldsTitle(getField))
        }
            const rows = currentItems.map(({brand, id, product, price}: SingleItemType) => (
                <tbody key={id}>
                <tr>
                    <td>{id}</td>
                    <td>{brand}</td>
                    <td>{price}</td>
                    <td>{product}</td>
                </tr>
                </tbody>
            ));
            return <div>
                <input placeholder='фильтр по названию' value={title} onChange={onChangeHandlerTitle}/>
                <button onClick={onClickHandlerTitle}>Поиск</button>
                <input  placeholder='фильтр по цене' value={value} onChange={onChangeHandlerValue}/>
                <button onClick={onClickHandlerValue}>Поиск</button>
                <input  placeholder='фильтр по бренду' value={brandValue} onChange={onChangeHandlerBrand}/>
                <button onClick={onClickHandlerBrand}>Поиск</button>
        <table className={style.tableContainer}>
                <thead>
                <tr className={style.trContainer}>
                    <td>Id</td>
                    <td>Бренд</td>
                    <td>Стоимость</td>
                    <td>Продукт</td>

                </tr>
                </thead>
                {rows}

            </table>;
        <ContentPagination elementOnPage={elementOnPage} currentPage={currentPage} totalItems={totalItems}/>
            </div>
        }
    )
;

