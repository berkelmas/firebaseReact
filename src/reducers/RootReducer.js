import MessageReducer from './MessageReducer';
import UserReducer from './UserReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    message: MessageReducer,
    user: UserReducer
})

export default RootReducer;