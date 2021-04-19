import { Dispatch } from "redux";
import {FormAction, stopSubmit} from "redux-form";
import {useDispatch} from "react-redux";
import { AppRootStateType } from "./store";

type CounterStateType = {
    startValue: number
    disableInc: boolean
    disableReset: boolean
    disableSet: boolean
    value: number
    maxValue: number
    error: string|null
}
const initialStste: CounterStateType = {
    startValue: 0,
    disableInc: false,
    disableReset: false,
    disableSet: false,
    value: 0,
    maxValue: 0,
    error: ""
}

export const incValue = (data: number) => ({type: 'inc-Value', data} as const)
export const setValuesAC = (maxVal: number, startVal: number, value: number) => ({
    type: 'set-Values',
    maxVal,
    startVal,
    value
} as const)
export const disButton = (whatdisable: any) => ({type: 'disable-button', whatdisable} as const)
export const resValues = () => ({type: 'res-value'} as const)
export const setError = (error: string|null) => ({type: 'set-error', error} as const)
// const dispatch=useDispatch()

// // export function stopSubmit(form: string, errors?: Object): Action;
// export const SendLoginData = (data: LoginDataType) => {
//     return async (dispatch: ThunkDispatch<inittype, void, ActionsTypes | FormAction>) => {
//         // let action=stopSubmit("login",{_error:'incorrect email or password  '})
//         // dispatch(action)


type ActionType = ReturnType<typeof incValue> |
    ReturnType<typeof setValuesAC> |
    ReturnType<typeof disButton> |
    ReturnType<typeof resValues> |
    ReturnType<typeof setError>


export const countreducer = (state: CounterStateType = initialStste, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'inc-Value':
            return {...state, value: state.value + action.data}
        case 'set-Values': {
            return {...state, maxValue: action.maxVal, startValue: action.startVal, value: action.value}
        }
        case 'disable-button': {
            const dis = action.whatdisable
            return {...state, ...dis}
        }
        case 'res-value' :
            return {...state, value: 0}
        case 'set-error': {
            return {...state, error: action.error}
        }
        default:
            return state
    }

}



export const setValues = (maxVal: number, startVal: number, value: number) => (dispatch:Dispatch)=>{
    localStorage.setItem("value",JSON.stringify(value))
    localStorage.setItem("maxVal",JSON.stringify(maxVal))
    localStorage.setItem("startVal",JSON.stringify(startVal))
    dispatch(setValuesAC(maxVal, startVal, value))
}
export const getValueFromLocal = () => (dispatch:Dispatch)=>{
    let locvalue=localStorage.getItem("value")
    let locmaxVal=localStorage.getItem("maxVal")
    let locstartVal=localStorage.getItem("startVal")
    if(locvalue&&locmaxVal&&locstartVal){
        dispatch(setValuesAC(+locmaxVal, +locstartVal, +locvalue))

    }
}