import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';

import BottomTabNavigator from '../navigations/BottomTabNavigator'
import { routes, screens } from '../RouteItems'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name
  return (
    <DrawerContentScrollView {...props}>
      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute?.focusedRoute :
            route.name === screens.Home
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#E5E5E5',
          height: 56,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="menu" size={20} color="#292D32" style={{height:30}}/>
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen name={screens.Home} component={BottomTabNavigator} options={{
        title: 'Home',
        // headerTitle:551E18 () => <Image source={require('../assets/hotel_logo.jpg')} />,
        headerTitle:'',
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="notifications-outline" size={20} color="#292D32" />
            <View style={styles.roundCard}>
            <Text style={styles.graphValue}>92%</Text>
          </View>
          </View>
          
        ),
      }}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
    flexDirection:'row'
    ,justifyContent:"space-around"
    ,alignItems:'center'
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
  

  roundCard: {
    borderRadius: 100,
    width: 36,
    height: 36,
    backgroundColor: '#F4E0FB',
  marginLeft:8,
  justifyContent: 'center',
  alignItems:'center',
  },
})

export default DrawerNavigator