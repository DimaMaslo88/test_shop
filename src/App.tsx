import React, {useEffect} from 'react';

import './App.css';
import {GetFieldsTitle, GetItemsIdThunk} from "dal/thunk/ItemsThunk";
import {useAppDispatch} from "bll/store";
import style from 'styles/app.module.scss'
import {useSelector} from "react-redux";
import {ColorRing} from "react-loader-spinner";
import {selectActions, selectIsError, selectSpinner} from "bll/selectors";
import {ItemsPage} from "ui/component/itemsPage";


function App() {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectSpinner)
    const actionsParams = useSelector(selectActions)
    const isError = useSelector(selectIsError)
    const getField = {
        action: 'get_fields',
        params: {
            field: actionsParams
        }
    }
    const data = {
        action: "get_ids",
        params: {
            limit: 500
        }
    }

    useEffect(() => {
        dispatch(GetItemsIdThunk(data))
    }, [])

    useEffect(() => {
        if (isError) {
            dispatch(GetItemsIdThunk(data))
        }
    }, [isError])

    useEffect(() => {
        if (actionsParams)
            dispatch(GetFieldsTitle(getField))
    }, [actionsParams])

    return (
        <div>
            <div className={style.appSpinnerBlock}>
                {isLoading && <div className={style.appSpinner}>
                    <ColorRing
                        height="120"
                        width="120"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                    <div className={style.title}>Идет Загрузка...</div>
                </div>}


            </div>
            <ItemsPage/>
        </div>
    );
}

export default App;
