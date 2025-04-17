import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import TodoNavigator from './TodoNavigator';
import ProfileNavigator from './ProfileNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import WeatherNavigator from './WeatherNavigator';
import Colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.tabBarButtonAdd}>
    <View style={styles.buttonCustom}>{children}</View>
  </TouchableOpacity>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            ...styles.tabBarCustom,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? Colors.primary : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'search' : 'search-outline'}
                size={24}
                color={focused ? Colors.primary : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Todo"
          component={TodoNavigator}
          options={{
            tabBarIcon: () => <Icon name="add" size={30} color="white" />,
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Weather"
          component={WeatherNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'rainy' : 'rainy-outline'}
                size={24}
                color={focused ? Colors.primary : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? Colors.primary : 'gray'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  tabBarButtonAdd: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.12,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonCustom: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarCustom: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#fff',
    paddingTop: 10,
    height: 65,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.06,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
