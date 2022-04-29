import {HIDE_DRAWER, SHOW_DRAWER} from '../constants/drawerConstants';

const initialState = {show: false};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {...state, show: true};

    case HIDE_DRAWER:
      return {...state, show: false};
    default:
      return state;
  }
};
