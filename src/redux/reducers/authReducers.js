import { POST_LOGIN } from "../constants/authConstants";

const initialState = {
  loading: false,
  username: '',
  password: '',
  token: '',
  msg: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
      return action.payload;
    default:
      return state;
  }
};
