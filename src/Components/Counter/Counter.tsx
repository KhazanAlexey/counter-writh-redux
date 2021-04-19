import React, {useEffect} from 'react'
import style from "./Counter.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../../store/reducers/store';
import {Button} from "../../utils/button/Button";
import {disButton, incValue, resValues, setError, setValues} from "../../store/reducers/count-reducer";

type propsType = {
    demo?: boolean

}

export const Counter = React.memo(function (props: propsType) {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, number>(state => state.countreducer.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
    const disableInc=useSelector<AppRootStateType,boolean>(state => state.countreducer.disableInc)
    const disableRest=useSelector<AppRootStateType,boolean>(state => state.countreducer.disableReset)
    const eror=useSelector<AppRootStateType,string|null>(state => state.countreducer.error)
    const incHandler = () => {
        if (value < maxValue - 1) {
            dispatch(incValue(1))
        }
        else {
            dispatch(incValue(1))
            dispatch(disButton({disableInc: true,
                disableReset: false,
                disableSet: false,}))

        }

    }
    const resetHandler = () => {
        dispatch(resValues())
        dispatch(disButton({disableInc: false,
            disableReset: false,
            disableSet: false,}))
        dispatch(setError(""))

    }



const error=useSelector<AppRootStateType,string|null>(state => state.countreducer.error)
    return <div className={style.counterwrapper}>
        <div>
            Counter with TypeScript, React,redux, redux-form, scss, localStorage
        </div>
        <div className={style.mainwindow}>
            {!error? <div className={value<maxValue?style.count:style.counterr}>
                <p>{value}</p>
            </div>:<div className={style.error}>{error}</div>}



            <div className={style.controls}>
                <Button onClick={incHandler} name={"inc"} disabledStatus={disableInc}/>
                <Button onClick={resetHandler} name={"reset"} disabledStatus={disableRest}/>


            </div>


        </div>


    </div>

})



