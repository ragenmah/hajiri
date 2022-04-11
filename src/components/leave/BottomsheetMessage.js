import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const BottomsheetMessage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Type of Leave</Text>
        <Text style={styles.subTitle}>Annual</Text>
      </View>
      <View>
        <Text style={styles.title}>Reason For Leave</Text>
        <Text style={styles.subTitle}>Message..</Text>
      </View>
      <View>
        <Text style={styles.title}>Supervisor</Text>
        <Text style={[styles.subTitle, styles.borderStyle]}>
          SuperVisor name
        </Text>
      </View>
    </View>
  );
};

export default BottomsheetMessage;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 36,
    bottom: 0,
    marginRight: 30,
  },
  title: {color: '#5D5D5D', marginTop: 16},
  subTitle: {color: '#5D5D5D', fontWeight: 'bold'},
  borderStyle: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
  },
});
