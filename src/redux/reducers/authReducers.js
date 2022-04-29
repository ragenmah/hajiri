import {
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
  POST_LOGIN_REQUEST,
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAIL,
} from '../constants/authConstants';

const initialState = {
  loading: false,
  // username: '',
  // password: '',
  // token: '',
  // msg: '',
  userData: [],
  // userMeData: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {...state, loading: true};
    case POST_LOGIN_SUCCESS:
      return {...state, userData: action.payload, loading: false, error: ''};
    case POST_LOGIN_FAIL:
      return {...state, userData: [], loading: false, error: action.payload};

    default:
      return state;
  }
};
