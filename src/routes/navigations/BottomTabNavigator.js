import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {routes, screens} from '../RouteItems';
import {
  HomeStackNavigator,
  LeaveRequestStackNavigator,
  TimeSheetStackNavigator,
} from './MainStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
  const item = routes.find(routeItem => routeItem.name === route.name);

  // if (!item?.showInTab) {
  //   return {
  //     tabBarButton: () => <View style={{width: 0}} />,
  //     headerShown: false,
  //     tabBarStyle: styles.tabContainer,
  //     title: item?.title,
  //   };
  // }

  return {
    tabBarIcon: ({focused}) => item?.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item?.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item?.title,
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen
        name={screens.TimeSheetStack}
        component={TimeSheetStackNavigator}
      />
      <Tab.Screen
        name={screens.LeaveRequestStack}
        component={LeaveRequestStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;
