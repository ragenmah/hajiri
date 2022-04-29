import {
  OTP_REQUEST,
  OTP_POST_SUCCESS,
  OTP_POST_FAIL,
  GET_OTP_TOKEN_FAIL,
  GET_OTP_TOKEN_SUCCESS,
} from '../constants/OTPContants';

const initialState = {
  loading: false,
  otpMessage: [],
  otpSuccessResponse: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return {...state, loading: true};
    case OTP_POST_SUCCESS:
      return {otpMessage: action.payload, loading: false, error: ''};
    case OTP_POST_FAIL:
      return {otpMessage: [], loading: false, error: action.payload};
    case GET_OTP_TOKEN_SUCCESS:
      return {otpSuccessResponse: action.payload, loading: false, error: ''};
    case GET_OTP_TOKEN_FAIL:
      return {otpSuccessResponse: [], loading: false, error: action.payload};

    default:
      return state;
  }
};
