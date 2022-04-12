import {
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
  POST_LOGIN_REQUEST,
} from '../constants/authConstants';

const initialState = {
  loading: false,
  username: '',
  password: '',
  token: '',
  msg: '',
  userData: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {...state, loading: true};
    case POST_LOGIN_SUCCESS:
      return {userData: action.payload, loading: false, error: ''};
    case POST_LOGIN_FAIL:
      return {userData: [], loading: false, error: action.payload};

    default:
      return state;
  }
};
