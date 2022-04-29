import React, {useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
const OTPInputField = props => {
  const reference = props.ref1;
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  return (
    <TextInput
      style={styles.textInputStyle}
      value={props.otpNumber}
      onChangeText={text => props.setFunction(text)}
      keyboardType="number-pad"
      activeOutlineColor={'#620A83'}
      maxLength={1}
      returnKeyType="next"
      // onSubmitEditing={() =>
      //   (reference === 1
      //     ? ref_input2
      //     : reference === 2
      //     ? ref_input3
      //     : reference === 3
      //     ? ref_input4
      //     : ref_input1
      //   ).current.focus()
      // }
      autoCapitalize="none"
      // ref={
      //   reference === 1
      //     ? ref_input2
      //     : reference === 2
      //     ? ref_input3
      //     : reference === 3
      //     ? ref_input4
      //     : ref_input4
      // }
    />
  );
};

export default OTPInputField;

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#620A83',
    borderRadius: 10,
    borderWidth: 1,
    // textAlignVertical: 'top',
    paddingLeft: 10,
    fontSize: 18,
    height: 40,
  },
});
