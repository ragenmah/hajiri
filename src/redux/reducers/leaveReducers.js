import {
  APPLY_LEAVE_FAIL,
  APPLY_LEAVE_SUCCESS,
  LEAVE_REQUEST,
} from '../constants/leaveConstants';

const initialState = {
  loading: false,
  postData: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_REQUEST:
      return {...state, loading: true};
    case APPLY_LEAVE_SUCCESS:
      return {postData: action.payload, loading: false, error: ''};
    case APPLY_LEAVE_FAIL:
      return {postData: [], loading: false, error: action.payload};
    default:
      return state;
  }
};
