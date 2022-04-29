import axios from 'axios';
import {API_BASE_URL} from '../../utils/constants';
import {
  RESET_PASS_REQUEST,
  RESET_PASS_POST_SUCCESS,
  RESET_PASS_POST_FAIL,
} from '../constants/ResetPasswordConstants';

export const fetchResetPassRequest = () => {
  return {type: RESET_PASS_REQUEST};
};
export const fetchResetPassSuccess = resetDetail => {
  return {type: RESET_PASS_POST_SUCCESS, payload: resetDetail};
};
export const fetchResetPassFail = error => {
  return {type: RESET_PASS_POST_FAIL, payload: error};
};

export const postResetPassword = (
  new_password,
  re_entered_password,
  otpToken,
) => {
  const data = {
    new_password: new_password,
    re_entered_password: re_entered_password,
    token: otpToken,
  };
  console.log('data');
  console.log(data);
  // console.error(email);
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log('requestr proceed');
  return async dispatch => {
    dispatch(fetchResetPassRequest);
    await axios
      .post(`${API_BASE_URL}/auth/reset-password`, data, options)
      .then(res => {
        dispatch(fetchResetPassSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchResetPassFail(err));
      });
  };
};
