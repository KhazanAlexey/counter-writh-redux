type CounterStateType = {
    startValue: number
    disableInc: boolean
    disableReset: boolean
    disableSet: boolean
    value: number
    maxValue: number
}
const initialStste: CounterStateType = {
    startValue: 0,
    disableInc: false,
    disableReset: false,
    disableSet: false,
    value: 0,
    maxValue: 0
}

export const incValue = (data: number) => ({type: 'inc-Value', data} as const)
export const setValues = (maxVal: number, startVal: number) => ({type: 'set-Values', maxVal, startVal} as const)
export const disButtonInc = (whatdisable: any) => ({type: 'disable-button', whatdisable} as const)
export const resValues = () => ({type: 'res-value'} as const)


type ActionType = ReturnType<typeof incValue> |
    ReturnType<typeof setValues> |
    ReturnType<typeof disButtonInc>|
    ReturnType<typeof resValues>


export const countreducer = (state: CounterStateType = initialStste, action: ActionType): CounterStateType => {

    switch (action.type) {
        case 'inc-Value':
            return {...state, value: state.startValue + action.data}
        case "set-Values": {
            return {...state, maxValue: action.maxVal, startValue: action.startVal}
        }
        case "disable-button": {
            const dis = action.whatdisable
            return {...state,...dis}
        }
        case "res-value" :
            return {...state,startValue: 0,maxValue:0,value:0}
        default:
            return state
    }

}