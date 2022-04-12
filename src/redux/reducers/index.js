import {combineReducers} from 'redux';
import {persistorReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducers from './authReducers';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  authReducers: authReducers,
});

export default rootReducer;
