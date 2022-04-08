import React from 'react'
import { Text ,SafeAreaView,ScrollView,StyleSheet} from 'react-native'
import AllLeaveLIst from '../components/leave/AllLeaveLIst'
import CorrectAttendance from '../components/leave/CorrectAttendance'
import LeaveStats from '../components/leave/LeaveStats'

const LeaveRequestScreen = () => {
  return (
    <SafeAreaView style={styles.scrollContainer}>
    <ScrollView>
      <LeaveStats/>
      <CorrectAttendance/>
      <AllLeaveLIst/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default LeaveRequestScreen

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor:"#F9F9F9",
  
  },
});