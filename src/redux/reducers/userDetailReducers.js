import {
  FETCH_USER_DETAIL_REQUEST,
  REQUEST_USERDETAIL_FAIL,
  REQUEST_USERDETAIL_SUCCESS,
} from '../constants/userDetailConstants';

const initialState = {
  loading: '',
  userDetail: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAIL_REQUEST:
      return {...state, loading: true};
    case REQUEST_USERDETAIL_SUCCESS:
      return {userDetail: action.payload, loading: false, error: ''};
    case REQUEST_USERDETAIL_FAIL:
      return {userDetail: [], loading: false, error: action.payload};
    default:
      return state;
  }
};
