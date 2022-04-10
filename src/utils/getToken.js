import React, { useState } from 'react'

const getToken = () => {
    var SharedPreferences = require('react-native-shared-preferences');
    const [userToken, setUserToken] = useState('');
    useEffect(() => {
        SharedPreferences.getItem('token', function (value) {
          // console.log(`value token ${value}`);
          setUserToken(value);
        });
      });
  return userToken
}

export default getToken