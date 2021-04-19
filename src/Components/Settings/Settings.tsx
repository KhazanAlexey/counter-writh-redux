import React, {useCallback, useEffect} from 'react'
import Counterstyle from "../Counter/Counter.module.scss"
import {Button} from "../../utils/button/Button";
import {InjectedFormProps} from 'redux-form/lib/reduxForm';
import {Field, WrappedFieldProps, reduxForm} from "redux-form";
import { useDispatch, useSelector} from "react-redux";
import {disButton, getValueFromLocal, setError, setValues, setValuesAC} from "../../store/reducers/count-reducer";
import {AppRootStateType} from "../../store/reducers/store";
import styleForm from "../Settings/form.module.css"
import settigStyle from "../Settings/Settings.module.scss"
import {minValue, requiriedField} from "../../validators/validators";

interface RenderFieldProps extends WrappedFieldProps {
    type: string
}

export type propsType = {
    geterr:(err:string|null)=>void
    initialValus?:FormDataType

}
export type FormDataType = {
    MaxValue: number
    startValue: number

}


export const SettingsForm: React.FC<InjectedFormProps<FormDataType,propsType>&propsType> =
    ({/*initialValues=initialValus,*/...props}) => {

    const disableSet = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableSet)
    const startValue = useSelector<AppRootStateType, number>(state => state.countreducer.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
    return (

        <form className={styleForm.contentform} onSubmit={props.handleSubmit}>

            <div>
                <label>MaxValue:</label>
                <Field placeholder={`${maxValue}`} name={'MaxValue'} type="number" component={Input}
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

        </form>
    )
}

export const Input = (props: RenderFieldProps&propsType) => {


    return (
        <div className={styleForm.form}>
            <div className={props.meta.error && props.meta.touched ? styleForm.counterr : ""}>

                <input  {...props.input} value={props.meta.initial} {...props}/>
            </div>
            <div>
                {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
            </div>
        </div>

    )
}






export const Settings = React.memo(function (props) {
    const dispatch = useDispatch()

    const startValue = useSelector<AppRootStateType, number>(state => state.countreducer.startValue)
    const disableInc = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableInc)
    const disableReset = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableReset)
    const disableSet = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableSet)
    const value = useSelector<AppRootStateType, number>(state => state.countreducer.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
    useEffect(() => {
        dispatch(setError("Put values in fields"))

       dispatch( getValueFromLocal())
    },[])


    const initialValues=
        {   MaxValue: maxValue,
            startValue: startValue
        }

    const SettingsReduxForm=reduxForm<FormDataType,propsType>
    ({form: 'settings'})(SettingsForm)







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
                    disableInc: true,
                    disableReset: true,
                    disableSet: false
                }
                dispatch(setError("Max value must be bigger start value"))
                dispatch(disButton(dis))

            }


        }, [dispatch]
    )
    const geterr=(err:string|null)=>{
        return  dispatch(setError(err))

    }
    return <div className={Counterstyle.counterwrapper}>

        <div className={Counterstyle.mainwindow}>

            <div className={settigStyle.settingFormWrapper}>
                <SettingsReduxForm  geterr={geterr}  onSubmit={onSubmit}/>
            </div>


        </div>


    </div>

})


