import React from 'react';
import {Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import ProfileCustomDropdown from '../components/dropdown/ProfileCustomDropdown';
import AllLeaveLIst from '../components/leave/AllLeaveLIst';
import CorrectAttendance from '../components/leave/CorrectAttendance';
import LeaveStats from '../components/leave/LeaveStats';

const LeaveRequestScreen = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const sendDataToParent = data => {
    // the callback. Use a better name
    console.log(data);
    setShowDropdown(data);
  };

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <CustomAppBar
        sendDataToParent={sendDataToParent}
        showDropdown={showDropdown}
        showWelcome={'true'}

      />
      <ScrollView>
        <ProfileCustomDropdown showdrawer={showDropdown} />
        <LeaveStats />
        <CorrectAttendance />
        <AllLeaveLIst />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveRequestScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
  },
});
