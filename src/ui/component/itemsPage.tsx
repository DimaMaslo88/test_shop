import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectItems} from "bll/selectors";
import {SingleItemType} from "bll/types/bll-types";
import style from 'styles/itemsPage.module.scss'

export const ItemsPage =React.memo( () => {
    const items = useSelector(selectItems)
    const [uniqueIds, setUniqueIds] = useState<{ [key: string]: boolean }>({});

    // Функция для проверки уникальности id
    const checkUniqueId = (id:string) => {
        if (uniqueIds[id]) {
            return false; // Дубликат id
        }
            setUniqueIds(prevIds => ({ ...prevIds, [id]: true }));
            return true; // Уникальный id

    };
debugger
    // Фильтрация товаров по уникальным id
   // const uniqueProducts = items.filter(item => checkUniqueId(item.id));
    //
    const rows = items.filter(item => checkUniqueId(item.id)).map(({brand,id,product,price}:SingleItemType)=> (
       <tr key={id}>
            <td >{brand}</td>
            <td>{price}</td>
            <td>{product}</td>
        </tr>
));
    return <table className={style.tableContainer}>
        <thead>
        <tr className={style.trContainer}>
            <td>Бренд</td>
            <td>Стоимость</td>
            <td>Продукт</td>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>;
    // (
    //     <div>
    //         {items.map(({brand,id,price,product}:SingleItemType)=>(
    //             <ul  className={style.ulContainer}>
    //                <li key={id}>
    //                    {brand}
    //                    {price}
    //                    {product}
    //                </li>
    //
    //             </ul>
    //         ))}
    //     </div>
    // );
}
    )
;

