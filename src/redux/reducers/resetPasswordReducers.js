import {
  RESET_PASS_REQUEST,
  RESET_PASS_POST_SUCCESS,
  RESET_PASS_POST_FAIL,
} from '../constants/ResetPasswordConstants';

const initialState = {
  loading: false,
  passwordSuccess: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASS_REQUEST:
      return {...state, loading: true};
    case RESET_PASS_POST_SUCCESS:
      return {passwordSuccess: action.payload, loading: false, error: ''};
    case RESET_PASS_POST_FAIL:
      return {passwordSuccess: [], loading: false, error: action.payload};

    default:
      return state;
  }
};
