import React from 'react'
import {Text, View, FlatList,StyleSheet} from 'react-native';
import TimeSheetsCard from './components/TimeSheetsCard';

const AllTimeSheets = () => {
    const renderItem = ({item, index}) => <TimeSheetsCard />;
    const emptyView = () => (
      <View>
        <Text>No Leave taken.</Text>
      </View>
    );
  return (
    <View style={styles.flatListStyle}>
      {/* <FlatList
        data={[]}
        renderItem={renderItem}
        ListEmptyComponent={emptyView}
      /> */}
      <TimeSheetsCard />
      <TimeSheetsCard />
      <TimeSheetsCard />
    </View>
  )
}

export default AllTimeSheets

const styles = StyleSheet.create({
    flatListStyle: {
      height: '100%',
    },
  });