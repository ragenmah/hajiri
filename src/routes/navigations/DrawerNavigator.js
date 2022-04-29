import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import BottomTabNavigator from '../navigations/BottomTabNavigator';
import {routes, screens} from '../RouteItems';
import {useRoute} from '@react-navigation/native';
import WelcomeCard from '../../components/welcome/WelcomeCard';
import ProfileCustomDropdown from '../../components/dropdown/ProfileCustomDropdown';
import {useDispatch} from 'react-redux';
import {hideDrawer, showDrawer} from '../../redux/actions/drawerActions';
import EmployeeCard from '../../components/whoInOrOut/customDrawer/EmployeeCard';
import {TextInput} from 'react-native-gesture-handler';

const navigationRef = React.createRef();
const navigatioin = () => navigationRef.current;

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  return (
    <DrawerContentScrollView {...props} style={{height: 50}}>
      {/* {routes
        .filter(route => route.showInDrawer)
        .map(route => {
          const focusedRoute = routes.find(r => r.name === currentRouteName);
          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.Home;
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <View style={styles.drawerItemRow}>
                  {route.title === 'Log Out' ? (
                    <SimpleLineIcons name="logout" size={20} color="#292D32" />
                  ) : (
                    <EvilIcon name="user" size={25} color="#292D32" />
                  )}
                  <Text
                    style={
                      focused ? styles.drawerLabelFocused : styles.drawerLabel
                    }>
                    {route.title}
                  </Text>
                </View>
              )}
              onPress={() => {
                route.title === 'Log Out'
                  ? props.navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: route.name,
                          params: {someParam: 'Param1'},
                        },
                      ],
                    })
                  : props.navigation.navigate(route.name);
              }}
              style={[
                styles.drawerItem,
                focused ? styles.drawerItemFocused : null,
              ]}
            />
          );
        })} */}
      <Pressable
        style={[
          Platform.OS === 'ios' ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => props.setModalVisible(false)}
      />
      <View>
        <View style={[styles.cardContainer]}>
          <View style={styles.cardInsideContainer}>
            <Text
              style={{
                color: '#803A9B',
                letterSpacing: 1.24,
                textTransform: 'uppercase',
                alignSelf: 'center',
              }}>
              Who is in/out?
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesignIcons
                name={'search1'}
                size={22}
                color="#ADADAD"
                style={{paddingLeft: 20}}
              />
              <TextInput placeholder="Search Employee"></TextInput>
            </View>
            <View style={styles.horizontalLine}></View>
            <View>
              <Text style={styles.checkin}>
                Checked in <Text style={styles.checkinNumber}>3</Text>
              </Text>
              <EmployeeCard name={'Kobe checked in'} time={'8:45am'} />
              <EmployeeCard name={'Maya checked in'} time={'8:45am'} />
              <EmployeeCard name={'Sharon checked in'} time={'8:45am'} />
            </View>
            <View style={styles.horizontalLine}></View>
            <View>
              <Text style={styles.checkin}>
                Checked Out <Text style={styles.checkinNumber}>1</Text>
              </Text>
              <EmployeeCard name={'Alis checked in'} time={'8:45am'} />
            </View>
            <View style={styles.horizontalLine}></View>
            <View>
              <Text style={styles.checkin}>
                On Leave<Text style={styles.checkinNumber}>1</Text>
              </Text>
              <EmployeeCard name={'Alis checked in'} time={'8:45am'} />
            </View>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const route = useRoute();
  const nav = route.params.navigation;
  const dispatch = useDispatch();
  const [showDrawers, setShowDrawers] = React.useState(false);

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#F9F9F9',
          height: 56,
        },
        headerShown: false,
        drawerStyle: {
          marginTop: 56,
          marginBottom: 55,
          backgroundColor: '#F9F9F9',
          width: '58%',
        },
        swipeEdgeWidth: 0,
        drawerPosition: 'right',
        overlayColor: 'transparent',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}>
            {/* <Icon name="menu" size={25} color="#292D32" /> */}
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => (
        <CustomDrawerContent {...props} nav={navigatioin} />
      )}>
      <Drawer.Screen
        name={screens.Home}
        component={BottomTabNavigator}
        options={{
          // drawerItemStyle: {height: 0},

          title: 'Home',
          // headerTitle: () => <WelcomeCard firstName={'Ragen'} />,
          headerTitle: '',
          headerRight: () => (
            <View style={styles.headerRightStyle}>
              <View style={styles.headerRight}>
                {/* <Icon name="notifications-outline" size={20} color="#292D32" /> */}
                <WelcomeCard firstName={'Ragen'} />
                <View
                  style={
                    {
                      // marginTop: '16%',
                      // width: 300,
                      // alignItems: 'center',
                      // justifyContent: 'center',
                    }
                  }>
                  <TouchableNativeFeedback
                    onPress={() => {
                      console.log(':hello');
                      showDrawer ? dispatch(showDrawer) : dispatch(showDrawer);
                      setShowDrawers(!showDrawers);
                    }}>
                    <View style={styles.roundCard}>
                      <Text style={styles.graphValue}>92%</Text>
                    </View>
                  </TouchableNativeFeedback>
                  {/* <ProfileCustomDropdown /> */}
                </View>
              </View>
              {/* <ProfileCustomDropdown /> */}
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRightStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    marginLeft: 10,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
    marginLeft: 10,
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#757575',
    marginLeft: 16,
    marginRight: 16,
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
  drawerItemRow: {flexDirection: 'row'},
  roundCard: {
    borderRadius: 100,
    width: 36,
    height: 36,
    backgroundColor: '#F4E0FB',
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#CECECE',
  },
  checkin: {
    color: '#1F1F1F',
    fontSize: 20,
    marginLeft: '10%',
  },
  checkinNumber: {
    color: '#803A9B',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default DrawerNavigator;
