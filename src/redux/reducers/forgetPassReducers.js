import {
  FORGETPASS_REQUEST,
  FORGETPASS_POST_SUCCESS,
  FORGETPASS_POST_FAIL,
} from '../constants/forgetPassConstants';

const initialState = {
  loading: false,
  changedPass: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORGETPASS_REQUEST:
      return {...state, loading: true};
    case FORGETPASS_POST_SUCCESS:
      return {...state, changedPass: action.payload, loading: false, error: ''};
    case FORGETPASS_POST_FAIL:
      return {...state, changedPass: [], loading: false, error: action.payload};

    default:
      return state;
  }
};
