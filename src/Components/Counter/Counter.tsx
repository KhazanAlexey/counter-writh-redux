import React from 'react'
import style from "./Counter.module.scss"
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../store/reducers/store';

type propsType ={
    demo?: boolean

}

export const Counter =React.memo(function (props:propsType){

const value=useSelector<AppRootStateType,number>(state => state.countreducer.value)






    return <div className={style.counterwrapper}>
<div className={style.mainwindow}>

    <div className={style.count}>
        {value}
    </div>

    <div className={style.controls}>



    </div>



</div>


    </div>

})



