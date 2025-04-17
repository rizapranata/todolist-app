import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ProfileDetailScreen from '../screens/Profile/ProfileDetailScreen';
const Stack = createNativeStackNavigator();


function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}  />
      <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen}  />
    </Stack.Navigator>
  )
}

export default ProfileNavigator