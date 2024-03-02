import React, {useEffect} from 'react';

import './App.css';
import {GetItemsIdThunk} from "dal/thunk/ItemsThunk";
import {useAppDispatch} from "bll/store";

import {useSelector} from "react-redux";
import {ColorRing} from "react-loader-spinner";
import {selectSpinner} from "bll/selectors";
import {ItemsPage} from "ui/component/itemsPage";

function App() {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectSpinner)
    const data = {
        action: "get_ids",
        params: {
            limit:50
        }
    }
    // const itemsData ={
    //
    //     action: "get_items",
    //     params: {
    //         ids: itemsId
    //     }
    //
    // }
    useEffect(() => {
        debugger

        dispatch(GetItemsIdThunk(data))

        // dispatch(GetItemsThunk(itemsData))


    }, [])
    // useEffect(()=>{
    //     if(itemsId){
    //         dispatch(GetItemsThunk(itemsData))
    //     }
    //
    // },[])

    return (

        <div>
            {isLoading && <div>
            <ColorRing
                // visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
                <div>Loading...</div>
            </div>}

            <ItemsPage/>
        </div>
    );
}

export default App;
