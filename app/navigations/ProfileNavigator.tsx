import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ProfileDetailScreen from '../screens/Profile/ProfileDetailScreen';
const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="ProfileScreen"
        options={{title: 'Profile Screen', headerTitleAlign: 'center'}}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="ProfileDetailScreen"
        component={ProfileDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
