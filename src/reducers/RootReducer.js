import MessageReducer from './MessageReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    message: MessageReducer
})

export default RootReducer;