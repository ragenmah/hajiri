import {combineReducers} from 'redux';
import {persistorReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducers from './authReducers';
import leaveReducers from './leaveReducers';
import userDetailReducers from './userDetailReducers';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  authReducers: authReducers,
  leaveReducers: leaveReducers,
  userDetailReducers: userDetailReducers,
});

export default rootReducer;
