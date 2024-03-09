import React, {ChangeEvent, useState} from 'react';
import {useSelector} from "react-redux";
import { selectCurrenPage, selectElementsOnPage, selectItems} from "bll/selectors";
import {SingleItemType} from "bll/types/bll-types";
import style from 'styles/itemsPage.module.scss'
import {ContentPagination} from "ui/component/pagination/pagination";
import {useAppDispatch} from "bll/store";
import {changeFilterActions, changeFilterBrand, changeFilterTitle, changeFilterValue} from "bll/actions/item-actions";
import {v4 as uuidv4} from 'uuid'

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
        const buttonBrandDisabled =  brandValue.length <2
        const buttonTitleDisabled =  title.length <2
        const buttonPriceDisabled = value ===0
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
        dispatch(changeFilterActions('product'))
        dispatch(changeFilterTitle(title))
        setTitle('')

    }
        const onClickHandlerValue=()=>{
            dispatch(changeFilterActions('price'))
            dispatch(changeFilterValue(value))
            setValue(0)

        }
        const onClickHandlerBrand=()=>{
            dispatch(changeFilterActions('brand'))
            dispatch(changeFilterBrand(brandValue))
            setBrandValue('')

        }

            const rows = currentItems.map(({brand, id, product, price}: SingleItemType) => (
                <tbody key={uuidv4()}>
                <tr className={style.trContainer}>
                    <td className={style.td}>{id}</td>
                    <td className={style.td}>{brand}</td>
                    <td className={style.td}>{price}</td>
                    <td className={style.td}>{product}</td>
                </tr>
                </tbody>
            ));
            return <div>
                <div className={style.searchBlock}>
                    <div className={style.inputBlock}>
                <input placeholder='фильтр по названию' value={title} onChange={onChangeHandlerTitle} className={style.input}/>
                <button onClick={onClickHandlerTitle}
                        className={buttonTitleDisabled?style.buttonDisabled:style.button}
                        disabled={buttonTitleDisabled}
                >Поиск</button>
                    </div>
                    <div className={style.inputBlock}>
                <input  placeholder='фильтр по цене' value={value} onChange={onChangeHandlerValue}  className={style.input}/>
                <button onClick={onClickHandlerValue}
                        className={buttonPriceDisabled?style.buttonDisabled:style.button}
                        disabled={buttonPriceDisabled}
                >Поиск</button>
                    </div>
                    <div className={style.inputBlock}>
                <input  placeholder='фильтр по бренду' value={brandValue} onChange={onChangeHandlerBrand}  className={style.input}/>
                <button onClick={onClickHandlerBrand}
                        className={buttonBrandDisabled?style.buttonDisabled:style.button}
                        disabled={buttonBrandDisabled}
                >Поиск</button>
                    </div>
                </div>
                <div className={style.tableContainer}>
        <table className={style.table} >
                <thead className={style.theadContainer}>
                <tr className={style.trContainer}>
                    <td className={style.tD}>Id</td>
                    <td className={style.tD}>Бренд</td>
                    <td className={style.tD}>Стоимость</td>
                    <td className={style.tD}>Продукт</td>

                </tr>
                </thead>
                {rows}

            </table>
                </div>
        <ContentPagination elementOnPage={elementOnPage} currentPage={currentPage} totalItems={totalItems}/>
            </div>
        }
    )
;

