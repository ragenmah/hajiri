import axios from 'axios';
import {API_BASE_URL} from '../../utils/constants';
import {
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
  POST_LOGIN_REQUEST,
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAIL,
} from '../constants/authConstants';
import {postUserDetail} from './userDetailActions';

export const postLoginRequest = () => {
  return {type: POST_LOGIN_REQUEST};
};

export const postLoginFailure = error => {
  return {type: POST_LOGIN_FAIL, payload: error};
};

export const postLoginSuccess = userData => {
  return {type: POST_LOGIN_SUCCESS, payload: userData};
};

export const postLoginUser = (username, password, checked) => {
  var SharedPreferences = require('react-native-shared-preferences');
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
  // console.log('HELLO LOGI N');
  // console.log(`${username} ${password}`);
  return async dispatch => {
    dispatch(postLoginRequest);
    // console.log(`TOKEN ==== : ${API_BASE_URL}`);

    await axios
      .post(`${API_BASE_URL}/auth/login`, data, options)
      .then(res => {
        const loginResponse = res.data;
        // console.log(`TOKEN ==== : ${JSON.stringify(res.data['token'])}`);
        // console.log(`attendance token ${JSON.stringify(res.data['token'])} `);
        SharedPreferences.setItem('token', res.data['token']);
        // SharedPreferences.getItem('token', function (value) {
        //   // console.log('TOeken ===');
        //   // console.log(value);
        //   return value;
        // });
        // console.log('Response ');
        dispatch(postLoginSuccess(loginResponse));
        console.log('checked');
        console.log(checked);
        if (checked) {
          SharedPreferences.setItem('setRememberMe', 'true');
          SharedPreferences.getItem('setRememberMe', function (value) {
            console.log('remember me checked');
            console.log(value);
          });
        }
        console.log('leave checked');
        console.log(checked);
        // dispatch(postUserDetail(res.data['token']));
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
    console.log('Dispatch in end');
  };
};

export const validateEmail = email => {
  const strongRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );
  if (email == '' && email.trim() && !strongRegex.test(email)) {
    return false;
  }
  return true;
};

export const validatePassword = password => {
  if (password.trim() && password.length === 0 && password === '') {
    return false;
  }
  // else if (password.length < 8) {
  //   return false;
  // }
  return true;
};

export const handleRememberMe = checked => {
  if (checked) {
    return true;
  }
  return false;
};

export const getUserDetailRequest = () => {
  return {type: GET_USER_DETAIL_REQUEST};
};

export const getUserDetailFailure = error => {
  return {type: GET_USER_DETAIL_FAIL, payload: error};
};

export const getUserDetailSuccess = userData => {
  return {type: GET_USER_DETAIL_SUCCESS, payload: userData};
};

export const getUserDetail = token => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  console.log('hello user me');
  console.log(token);

  return async dispatch => {
    dispatch(getUserDetailRequest);
    await axios
      .post(`${API_BASE_URL}/users/me`, data, options)
      .then(res => {
        dispatch(getUserDetailSuccess(res.data));
      })
      .catch(error => {
        if (error.response) {
          // console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
        }
        // console.log(error);
        dispatch(getUserDetailFailure(error));
      });
  };
};
