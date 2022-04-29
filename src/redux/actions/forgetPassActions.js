import axios from 'axios';
import {API_BASE_URL} from '../../utils/constants';
import {
  FORGETPASS_REQUEST,
  FORGETPASS_POST_SUCCESS,
  FORGETPASS_POST_FAIL,
} from '../constants/forgetPassConstants';

export const postFORGETPASSRequest = () => {
  return {type: FORGETPASS_REQUEST};
};

export const postFORGETPASSFailure = error => {
  return {type: FORGETPASS_POST_FAIL, payload: error};
};

export const postFORGETPASSSuccess = userData => {
  return {type: FORGETPASS_POST_SUCCESS, payload: userData};
};

export const postFORGETPASSUser = (
  oldPassword,
  newPassword,
  reEnterPassword,
  token,
) => {
  const data = {
    old_password: oldPassword,
    new_password: newPassword,
    re_entered_password: reEnterPassword,
  };

  console.log('data forget');
  console.log(data);
  console.log('tokenn ===== >');
  console.log(token);

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  console.log('FORGETPASS inside');
  console.log(options);
  return async dispatch => {
    dispatch(postFORGETPASSRequest);
    await axios
      .post(`${API_BASE_URL}/auth/change-password`, data, options)
      .then(res => {
        const FORGETPASSResponse = res.data;

        dispatch(postFORGETPASSSuccess(FORGETPASSResponse));
      })
      .catch(error => {
        if (error.response) {
          // console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
        }
        // console.log(error);
        dispatch(postFORGETPASSFailure(error));
      });
  };
};
