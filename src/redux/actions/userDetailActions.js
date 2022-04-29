import axios from 'axios';
import {API_BASE_URL} from '../../utils/constants';
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

export const postUserDetail = token => {
  var SharedPreferences = require('react-native-shared-preferences');
  // var USER_TOKEN = '';
  // SharedPreferences.getItem('token', function (value) {
  //   // console.log('TOeken ===');
  //   // console.log(value);
  //   USER_TOKEN = value;
  //   console.log('TOken ===');
  //   console.log(USER_TOKEN);
  //   // return value;
  // });

  console.log('hello from user details');
  console.log(token);
  console.log('hello user details');
  return async dispatch => {
    dispatch(fetchUserDetailRequest);
    await axios
      .get(`${API_BASE_URL}/users/me`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
        SharedPreferences.setItem(
          'firstName',
          res.data['data']['first_name'].toString(),
        );
        SharedPreferences.setItem(
          'lastName',
          res.data['data']['last_name'].toString(),
        );
        SharedPreferences.setItem(
          'image',
          res.data['data']['image_url']?.toString(),
        );

        dispatch(fetchUserDetailSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchUserDetailFail(err));
      });
  };
};
