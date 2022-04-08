import React from 'react';
import LeaveCard from './LeaveCard';
import {Text, View, FlatList,StyleSheet} from 'react-native';

const AllLeaveLIst = () => {
  const renderItem = ({item, index}) => <LeaveCard />;
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
      <LeaveCard />
      <LeaveCard />
      <LeaveCard />
    </View>
  );
};

export default AllLeaveLIst;

const styles = StyleSheet.create({
  flatListStyle: {
    height: '100%',
  },
});
