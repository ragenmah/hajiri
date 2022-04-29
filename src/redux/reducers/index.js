import {combineReducers} from 'redux';
import {persistorReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducers from './authReducers';
import leaveReducers from './leaveReducers';
import userDetailReducers from './userDetailReducers';
import OTPReducers from './OTPReducers';
import drawerReducers from './drawerReducers';
import forgetPassReducers from './forgetPassReducers';
import resetPasswordReducers from './resetPasswordReducers';
import timesheetReducers from './timesheetReducers';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  authReducers: authReducers,
  leaveReducers: leaveReducers,
  userDetailReducers: userDetailReducers,
  otpReducers: OTPReducers,
  showDrawer: drawerReducers,
  changePassword: forgetPassReducers,
  resetPassword: resetPasswordReducers,
  timeSheet: timesheetReducers,
});

export default rootReducer;
