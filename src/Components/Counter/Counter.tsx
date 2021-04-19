import React, {useEffect} from 'react'
import style from "./Counter.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../../store/reducers/store';
import {Button} from "../../utils/button/Button";
import {disButton, incValue, resValues, setValues} from "../../store/reducers/count-reducer";

type propsType = {
    demo?: boolean

}

export const Counter = React.memo(function (props: propsType) {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, number>(state => state.countreducer.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
    const disableInc=useSelector<AppRootStateType,boolean>(state => state.countreducer.disableInc)
    const disableRest=useSelector<AppRootStateType,boolean>(state => state.countreducer.disableReset)
    const incHandler = () => {
        if (value < maxValue - 1) {
            dispatch(incValue(1))
        }
        else {
            dispatch(incValue(1))
            dispatch(disButton({disableInc: true,
                disableReset: false,
                disableSet: true,}))
        }

    }
    const resetHandler = () => {
        dispatch(resValues())
        dispatch(disButton({disableInc: false,
            disableReset: false,
            disableSet: false,}))
    }

    // useEffect(() => {
    //
    //     // dispatch(setValues(maxValue, value))
    //
    // }, [value])

const error=useSelector<AppRootStateType,string>(state => state.countreducer.error)
    return <div className={style.counterwrapper}>
        <div className={style.mainwindow}>

            <div className={value<maxValue?style.count:style.counterr}>
                {value}
                <div>{error}</div>
            </div>

            <div className={style.controls}>
                <Button onClick={incHandler} name={"inc"} disabledStatus={disableInc}/>
                <Button onClick={resetHandler} name={"reset"} disabledStatus={disableRest}/>


            </div>


        </div>


    </div>

})



