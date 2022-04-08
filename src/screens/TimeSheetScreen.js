import React from 'react'
import { Text ,SafeAreaView,ScrollView,StyleSheet,View} from 'react-native'
import AllTimeSheets from '../components/timesheet/AllTimeSheets';
import FilterAndDownload from '../components/timesheet/FilterAndDownload';
import TimesheetStats from '../components/timesheet/TimesheetStats';

const TimeSheetScreen = () => {
  return (
    <SafeAreaView style={styles.scrollContainer}>
    <ScrollView>
      <TimesheetStats/>
      <View style={{paddingLeft:41,paddingRight:41,marginTop:20}}>
      <FilterAndDownload/>
      <AllTimeSheets/>
      </View>        
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor:"#F9F9F9",
  
  },
});

export default TimeSheetScreen