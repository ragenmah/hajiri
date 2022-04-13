import axios from 'axios';
import {USER_TOKEN} from '../../utils/constants';
import {
  FETCH_USER_DETAIL_REQUEST,
  REQUEST_USERDETAIL_FAIL,
  REQUEST_USERDETAIL_SUCCESS,
} from '../constants/userDetailConstants';

export const fetchUserDetailRequest = () => {
  return {type: FETCH_USER_DETAIL_REQUEST};
};
export const fetchUserDetailSuccess = userDetail => {
  return {type: REQUEST_USERDETAIL_SUCCESS, payload: userDetail};
};
export const fetchUserDetailFail = error => {
  return {type: REQUEST_USERDETAIL_FAIL, payload: error};
};

export const postUserDetail = () => {
  var SharedPreferences = require('react-native-shared-preferences');

  try {
    console.log('hello from user details');
    axios
      .get(`${API_BASE_URL}/users/me`, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + USER_TOKEN,
        },
      })
      .then(res => {
        const data = JSON.stringify(res.data['data']);
        // setUserAll(res.data);
        // console.log('hello' + JSON.stringify(res.data['data']));
        console.log('userid' + res.data['data']['first_name']);
        // setUserId(res.data['data']['id']);
        // setFirstName(res.data['data']['first_name']);
        SharedPreferences.setItem('userId', res.data['data']['id'].toString());
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.error(error);
  }
};
