import React from 'react';
import {useSelector} from "react-redux";
import {selectCurrenPage, selectElementsOnPage, selectItems} from "bll/selectors";
import {SingleItemType} from "bll/types/bll-types";
import style from 'styles/itemsPage.module.scss'
import {ContentPagination} from "ui/component/pagination/pagination";

export const ItemsPage = React.memo(() => {
            const items = useSelector(selectItems)
            const currentPage = useSelector(selectCurrenPage)
            const elementOnPage = useSelector(selectElementsOnPage)
            const totalItems = items.length
            const lastItemsIndex = currentPage * elementOnPage
            const firstItemsIndex = lastItemsIndex - elementOnPage
            const currentItems = items.slice(firstItemsIndex, lastItemsIndex)
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

