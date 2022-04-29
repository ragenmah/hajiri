import axios from 'axios';
import {API_BASE_URL} from '../../utils/constants';
import {
  FETCH_ATTENDANCEBYID_REQUEST,
  REQUEST_ATTENDANCEBYID_FAIL,
  REQUEST_ATTENDANCEBYID_SUCCESS,
} from '../constants/timeSheetConstants';

export const fetchAttendanceDetailRequest = () => {
  return {type: FETCH_ATTENDANCEBYID_REQUEST};
};
export const fetchAttendanceDetailSuccess = attendanceDetail => {
  return {type: REQUEST_ATTENDANCEBYID_SUCCESS, payload: attendanceDetail};
};
export const fetchAttendanceDetailFail = error => {
  return {type: REQUEST_ATTENDANCEBYID_FAIL, payload: error};
};

export const postAttendanceDetailById = (token, userId) => {
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
  console.log(userId);
  return async dispatch => {
    dispatch(fetchAttendanceDetailRequest);
    await axios
      .get(
        `${API_BASE_URL}/attendances`,
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
        {
          params: {
            staff_id: userId,
          },
        },
      )
      .then(res => {
        // markDate.add()
        console.log('iniside');

        dispatch(fetchAttendanceDetailSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchAttendanceDetailFail(err));
      });
  };
};
