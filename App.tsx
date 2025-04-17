import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import RootNavigator from './app/navigations/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
