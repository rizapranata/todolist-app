import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../screens/Search/SearchScreen';
import SearchResultScreen from '../screens/Search/SearchResultScreen';

const Stack = createNativeStackNavigator();

function SearchNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="SearchScreen"
        options={{title: 'Search Screen'}}
        component={SearchScreen}
      />
      <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
