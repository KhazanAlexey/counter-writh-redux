import {countreducer} from "./count-reducer";
import {applyMiddleware, combineReducers, createStore, Store} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    countreducer: countreducer,
    form: formReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<AppRootStateType>

