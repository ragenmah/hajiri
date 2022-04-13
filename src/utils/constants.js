export const API_BASE_URL = 'https://robovoid.pagekite.me/api';

export const USER_TOKEN = '';

export const TOKEN_USER = () => {
  var SharedPreferences = require('react-native-shared-preferences');
  SharedPreferences.getItem('token', function (value) {
    USER_TOKEN = value;
    // return value;
  });
  //   return '';
};
