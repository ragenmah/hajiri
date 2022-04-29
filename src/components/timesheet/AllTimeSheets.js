import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {postAttendanceDetailById} from '../../redux/actions/timeSheetActions';
import TimeSheetsCard from './components/TimeSheetsCard';

const AllTimeSheets = ({token, userId}) => {
  const dispatch = useDispatch();
  const {timeSheet} = useSelector(state => state);
  useEffect(() => {
    dispatch(postAttendanceDetailById(token, userId));
  });
  const renderItem = ({item, index}) => (
    <TimeSheetsCard
      date={item.date}
      checkInTime={item.check_in}
      checkOutTime={item.check_out}
      workingHours={item.total_time}
    />
  );
  const emptyView = () => (
    <View>
      <Text>No Timesheet available.</Text>
    </View>
  );

  // console.log('timeSheet?.timeSheetDetail');
  // console.log(timeSheet?.timeSheetDetail);
  return (
    <View style={styles.flatListStyle}>
      <FlatList
        data={timeSheet?.timeSheetDetail?.data}
        renderItem={renderItem}
        ListEmptyComponent={emptyView}
      />
    </View>
  );
};

export default AllTimeSheets;

const styles = StyleSheet.create({
  flatListStyle: {
    height: '100%',
  },
});
