import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/reducers/store";
import style from "../../Components/Counter/Counter.module.scss";


type propsType = {
    name: string
    disabledStatus: boolean
}


export const Button = React.memo(function (props: propsType) {

    return <div>
        <button disabled={props.disabledStatus}>{props.name}</button>
    </div>

})

