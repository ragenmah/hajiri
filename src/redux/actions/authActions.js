import axios from 'axios';
import {RectButton} from 'react-native-gesture-handler';
import {API_BASE_URL} from '../../utils/constants';
import {
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
  POST_LOGIN_REQUEST,
} from '../constants/authConstants';

var SharedPreferences = require('react-native-shared-preferences');

export const postLoginRequest = () => {
  return {type: POST_LOGIN_REQUEST};
};

export const postLoginFailure = error => {
  return {type: POST_LOGIN_FAIL, payload: error};
};

export const postLoginSuccess = userData => {
  return {type: POST_LOGIN_SUCCESS, payload: userData};
};

export const postLoginUser = (username, password) => {
  const data = {
    username: username,
    password: password,
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  return async dispatch => {
    dispatch(postLoginRequest);
    await axios
      .post(`${API_BASE_URL}/auth/login`, data, options)
      .then(res => {
        const loginResponse = res.data;
        console.log(`TOKEN ==== : ${JSON.stringify(res.data['token'])}`);
        console.log(`attendance token ${JSON.stringify(res.data['token'])} `);
        SharedPreferences.setItem('token', res.data['token']);
        dispatch(postLoginSuccess(loginResponse));
      })
      .catch(error => {
        if (error.response) {
          // console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
        }
        // console.log(error);
        dispatch(postLoginFailure(error));
      });
  };
};

export const validateEmail = email => {
  const strongRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );
  if (email.trim() && !strongRegex.test(email)) {
    return false;
  }
  return true;
};

export const validatePassword = password => {
  if (password.trim() && password.length === 0) {
    return false;
  }
  // else if (password.length < 8) {
  //   return false;
  // }
  return true;
};

export const handleRememberMe = checked => {
  if (!checked) {
    SharedPreferences.setItem('setRememberMe', 'true');
    SharedPreferences.getItem('setRememberMe', function (value) {
      console.log('resmember me' + value);
    });
    return true;
  }
  return false;
};
