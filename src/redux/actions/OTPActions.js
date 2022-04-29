import axios from 'axios';
import {API_BASE_URL} from '../../utils/constants';
import {
  OTP_REQUEST,
  OTP_POST_SUCCESS,
  OTP_POST_FAIL,
  GET_OTP_TOKEN_FAIL,
  GET_OTP_TOKEN_SUCCESS,
} from '../constants/OTPContants';

export const postOTPRequest = () => {
  return {type: OTP_REQUEST};
};

export const postOTPFailure = error => {
  return {type: OTP_POST_FAIL, payload: error};
};

export const postOTPSuccess = userData => {
  return {type: OTP_POST_SUCCESS, payload: userData};
};

var SharedPreferences = require('react-native-shared-preferences');
export const postOTPUser = email => {
  const data = {
    email: email,
  };

  // console.error(email);
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log('OTP inside');
  return async dispatch => {
    dispatch(postOTPRequest);
    console.log('OTP inside dispatch');

    await axios
      .post(`${API_BASE_URL}/auth/otp/email`, data, options)
      .then(res => {
        const otpResponse = res.data;
        // console.log(otpResponse);
        dispatch(postOTPSuccess(otpResponse));
      })
      .catch(error => {
        if (error.response) {
          // console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
        }
        // console.log(error);
        dispatch(postOTPFailure(error));
      });
  };
};

export const getOTPTokenFailure = error => {
  return {type: GET_OTP_TOKEN_FAIL, payload: error};
};

export const postOTPTokenSuccess = userData => {
  return {type: GET_OTP_TOKEN_SUCCESS, payload: userData};
};

export const getOTPtoken = otpCode => {
  const data = {
    code: Number(otpCode),
  };
  console.log(Number(otpCode));
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return async dispatch => {
    dispatch(postOTPRequest);
    await axios
      .post(`${API_BASE_URL}/auth/otp/get-token`, data, options)
      .then(res => {
        dispatch(postOTPTokenSuccess(res.data));
      })
      .catch(error => {
        if (error.response) {
          // console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
        }
        // console.log(error);
        dispatch(getOTPTokenFailure(error));
      });
  };
};
