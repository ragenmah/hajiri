import {
  FETCH_ATTENDANCEBYID_REQUEST,
  REQUEST_ATTENDANCEBYID_FAIL,
  REQUEST_ATTENDANCEBYID_SUCCESS,
} from '../constants/timeSheetConstants';

const initialState = {
  loading: '',
  timeSheetDetail: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ATTENDANCEBYID_REQUEST:
      return {...state, loading: true};
    case REQUEST_ATTENDANCEBYID_SUCCESS:
      return {timeSheetDetail: action.payload, loading: false, error: ''};
    case REQUEST_ATTENDANCEBYID_FAIL:
      return {timeSheetDetail: [], loading: false, error: action.payload};
    default:
      return state;
  }
};
