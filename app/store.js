import { combineReducers, createStore } from 'redux';
import { mechanicsReducer } from './reducers/mechanicsReducer';



const reducers = combineReducers({
    mechanics: mechanicsReducer
})

export default createStore(reducers);