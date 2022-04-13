import axios from 'axios';
import {API_BASE_URL, TOKEN_USER} from '../../utils/constants';
import {
  APPLY_LEAVE_FAIL,
  APPLY_LEAVE_SUCCESS,
  LEAVE_REQUEST,
} from '../constants/leaveConstants';

export const leaveRequest = () => {
  return {type: LEAVE_REQUEST};
};

export const applyLeaveSuccess = leaveData => {
  return {type: APPLY_LEAVE_SUCCESS, payload: leaveData};
};
export const applyLeaveFail = error => {
  return {type: APPLY_LEAVE_FAIL, payload: error};
};

export const postApplyLeave = data => {
  var SharedPreferences = require('react-native-shared-preferences');
  var userToken = '';
  SharedPreferences.getItem('token', function (value) {
    console.log('TOeken users');
    console.log(value);
    userToken = value;
  });
  //   console.log('Token users');
  //   const token = TOKEN_USER;
  //   console.log(token);
  //   console.log(TOKEN_USER);
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
  };
  // accept: 'application/json',
  console.log('dattaaa');
  console.log(data);
  console.log('Optionsss');
  console.log(options);
  return async dispatch => {
    try {
      dispatch(leaveRequest);
      await axios
        .post(`${API_BASE_URL}/leave-requests`, data, options)
        .then(res => {
          dispatch(applyLeaveSuccess(res.data));
          console.log(`RESPONSE ==== : ${JSON.stringify(res.data)}`);
        })
        .catch(err => {
          console.log('1dERROR: ====', err);
          dispatch(applyLeaveFail(err));
        });
    } catch (error) {
      console.log('error' + error);
    }
  };
};
