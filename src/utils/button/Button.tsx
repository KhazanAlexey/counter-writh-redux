import React, { Component } from 'react'

import style from "../button/Button.module.scss"
import {WrappedFieldProps} from "redux-form";
interface propsType  {
    name: string
    disabledStatus: boolean
    onClick?: ()=>void
}



export const Button = React.memo(function (props: propsType) {
    return <div className={style.buttonWrapper}>
        <button  disabled={props.disabledStatus} onClick={props.onClick}>{props.name}</button>
    </div>

})



//
// export class MyCustomButton extends Component {
//     render() {
//         const {  name,
//             disabledStatus} = this.props
//         return (
//             <div>
//
//
//                 <button disabled={props.disabledStatus} >{props.name}</button>
//
//
//
//             </div>
//         )
//     }
// }