import { START_TIMER, STOP_A_BREAK, STOP_TIMER, TAKE_A_BREAK } from "../constants/attendanceContants";

const initialState = {
    loading: false,
    checkInTime: null,
    checkOutTime: null,
    startBreakTime: null,
    stopBreakTime:null,
    totalBreakTime:null,
    workTime:null,
    error: '',
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case START_TIMER:

        return {...state, loading: true};
      case STOP_TIMER:
        return {loading: false, users: action.payload, error: ''};
      case TAKE_A_BREAK:
        return {loading: false, users: [], error: payload.error};
      case STOP_A_BREAK:
        return {...state, loading: true};
      
      default:
        return state;
    }
  };