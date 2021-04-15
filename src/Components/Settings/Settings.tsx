import React, {useCallback, useEffect} from 'react'
import Counterstyle from "../Counter/Counter.module.scss"
import {Button} from "../../utils/button/Button";
import {InjectedFormProps} from 'redux-form/lib/reduxForm';
import {Field, WrappedFieldProps, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {disButtonInc, setValues} from "../../store/reducers/count-reducer";
import {AppRootStateType} from "../../store/reducers/store";
import styleForm from "../Settings/form.module.css"
import settigStyle from "../Settings/Settings.module.scss"
import {minValue, requiriedField} from "../../validators/validators";

interface RenderFieldProps extends WrappedFieldProps {
    type: string
}

type propsType = {}
type FormDataType = {
    MaxValue: number
    startValue: number
}


const SettingsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const disableSet = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableSet)
    return (
        <form className={styleForm.contentform} onSubmit={props.handleSubmit}>
            <div>
                <label>MaxValue:</label>
                <Field placeholder={"MaxValue"} name={'MaxValue'} type="number" component={Input}
                       validate={[minValue, requiriedField]}
                />
            </div>
            <div>
                <label>StartValue:</label>
                <Field placeholder={"StartValue"} type="number" name={'startValue'}
                       validate={[minValue, requiriedField]}
                       component={Input}
                />

            </div>


            <div className={styleForm.buttonWrap}>
                <Button disabledStatus={disableSet} name={'Set'} {...props}/>
            </div>

            <div>ERROR{props.error}</div>
        </form>
    )
}

export const Input = (props: RenderFieldProps) => {
    return (
        <div className={styleForm.form}>
            <div className={props.meta.error && props.meta.touched ? styleForm.counterr : ""}>

                <input  {...props.input} {...props}/>
            </div>
            <div>
                aaa{props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
            </div>
        </div>

    )
}


export const SettingsReduxForm = reduxForm<FormDataType>({form: 'settings'})(SettingsForm)


export const Settings = React.memo(function (props: propsType) {
    const startValue = useSelector<AppRootStateType, number>(state => state.countreducer.startValue)
    const disableInc = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableInc)
    const disableReset = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableReset)
    const disableSet = useSelector<AppRootStateType, boolean>(state => state.countreducer.disableSet)
    const value = useSelector<AppRootStateType, number>(state => state.countreducer.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.countreducer.maxValue)
    useEffect(() => {

    })
    const dispatch = useDispatch()
    const setHandler = () => {

    }
    const onSubmit = useCallback((formData: FormDataType) => {
            let Data: FormDataType = {MaxValue: formData.MaxValue, startValue: formData.startValue}
            if (+formData.MaxValue > +formData.startValue) {
                dispatch(setValues(+formData.MaxValue, +formData.startValue, +formData.startValue))
            }
            const dis={disableInc: false,
                disableReset: false,
                disableSet: true}
            dispatch(disButtonInc(dis))
        }, [dispatch]
    )

    return <div className={Counterstyle.counterwrapper}>
        startval {startValue},
        disableInc {disableInc.toString()},
        disableReset {disableReset.toString()},
        disableSet {disableSet.toString()},
        val {value},
        maxVal {maxValue}
        <div className={Counterstyle.mainwindow}>

            <div className={settigStyle.settingFormWrapper}>
                <SettingsReduxForm onSubmit={onSubmit}/>
            </div>


        </div>


    </div>

})


