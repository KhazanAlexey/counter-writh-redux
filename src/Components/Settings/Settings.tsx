import React, {useCallback, useEffect} from 'react'
import Counterstyle from "../Counter/Counter.module.scss"
import {Button} from "../../utils/button/Button";
import {InjectedFormProps} from 'redux-form/lib/reduxForm';
import {Field, WrappedFieldProps, reduxForm, stopSubmit, initialize} from "redux-form";
import {connect, useDispatch, useSelector} from "react-redux";
import {disButton, getValueFromLocal, setError, setValues, setValuesAC} from "../../store/reducers/count-reducer";
import {AppRootStateType, store} from "../../store/reducers/store";
import styleForm from "../Settings/form.module.css"
import settigStyle from "../Settings/Settings.module.scss"
import {minValue, requiriedField} from "../../validators/validators";
import {compose} from "redux";

interface RenderFieldProps extends WrappedFieldProps {
    type: string
}

type propsType = {
    geterr:(err:string)=>void
    initialValus?:FormDataType
    onSubmit:(formData: FormDataType)=>void

}
type FormDataType = {
    MaxValue: number
    startValue: number

}


const SettingsForm: React.FC<InjectedFormProps<FormDataType,propsType>&propsType> =
    ({/*initialValues=initialValus,*/...props}) => {

    const disableSet = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableSet)
    const startValue = useSelector<AppRootStateType, number>(state => state.countreducer.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
debugger
    return (

        <form className={styleForm.contentform} onSubmit={props.handleSubmit}>

            <div>
                <label>MaxValue:</label>
                <Field placeholder={'1'} name={'MaxValue'} type="number" component={Input}
                       validate={[minValue, requiriedField]} geterr={props.geterr}
                />
            </div>
            <div>
                <label>StartValue:</label>
                <Field  placeholder={`${startValue}`} type="number" name={'startValue'}
                       validate={[minValue, requiriedField]}
                       component={Input} geterr={props.geterr}
                />
            </div>
            <div className={styleForm.buttonWrap}>
                <Button disabledStatus={disableSet} name={'Set'} {...props}/>
            </div>

            <div>ERROR{props.error}</div>
        </form>
    )
}

export const Input = (props: RenderFieldProps&propsType) => {

    const touched = props.meta.touched
    const dispatch = useDispatch()
    if (props.meta.touched) {
        const dis = {
            disableInc: true,
            disableReset: true,
            disableSet: false
        }
        dispatch(disButton(dis))
        props.geterr('enter value and press "set""')

        // dispatch(setError("enter value and press 'set'"))

    }
    return (
        <div className={styleForm.form}>
            <div className={props.meta.error && props.meta.touched ? styleForm.counterr : ""}>

                <input  {...props.input} value={props.meta.initial} {...props}/>
            </div>
            <div>
                aaa{props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
            </div>
        </div>

    )
}

// export const SettingsReduxForm = reduxForm<FormDataType,propsType>
// ({form: 'settings'})(SettingsForm)
type mstpType={
    MaxValue: number
    startValue: number
}
const mstp=(state:AppRootStateType)=>{
    return {
        MaxValue: state.countreducer.maxValue,
        startValue: state.countreducer.startValue
    }
}
// export const СonSettingsReduxForm =connect<mstpType, {}, {}, AppRootStateType>(mstp)
// (SettingsReduxForm)

compose<React.ComponentType>(
    connect<mstpType, {}, {}, AppRootStateType>(mstp,{}),
reduxForm<FormDataType,propsType>
({form: 'settings'})(SettingsForm))








export const Settings = React.memo(function (props) {
    const dispatch = useDispatch()

    const startValue = useSelector<AppRootStateType, number>(state => state.countreducer.startValue)
    const disableInc = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableInc)
    const disableReset = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableReset)
    const disableSet = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableSet)
    const value = useSelector<AppRootStateType, number>(state => state.countreducer.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
    useEffect(() => {

       dispatch( getValueFromLocal())
    },[])








    const onSubmit = useCallback((formData: FormDataType) => {
            if (+formData.MaxValue || +formData.startValue < 0) {
                dispatch(setError("Incorrect - Values"))

            }


            if (+formData.MaxValue > +formData.startValue) {
                dispatch(setValues(+formData.MaxValue, +formData.startValue, +formData.startValue))
                let dis = {
                    disableInc: false,
                    disableReset: false,
                    disableSet: true
                }
                dispatch(setError(""))
                dispatch(disButton(dis))


            } else {
                let dis = {
                    disableInc: false,
                    disableReset: false,
                    disableSet: true
                }
                dispatch(setError("Max value must be bigger start value"))
                dispatch(disButton(dis))

            }


        }, [dispatch]
    )
    const geterr=(err:string)=>{
        return  dispatch(setError(err))
        console.log("aaaaaaaaaaaaaaaaa")

    }
    return <div className={Counterstyle.counterwrapper}>
        startval {startValue},
        disableInc {disableInc.toString()},
        disableReset {disableReset.toString()},
        disableSet {disableSet.toString()},
        val {value},
        maxVal {maxValue}
        <div className={Counterstyle.mainwindow}>

            <div className={settigStyle.settingFormWrapper}>
                <SettingsForm  geterr={geterr}  onSubmit={onSubmit}/>
            </div>


        </div>


    </div>

})


