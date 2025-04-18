import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MovieScreen from '../screens/Movie/MovieScreen';

const Stack = createNativeStackNavigator();

const MovieNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="MovieScreen"
        options={{title: 'Movie Screen'}}
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
};

export default MovieNavigator;
