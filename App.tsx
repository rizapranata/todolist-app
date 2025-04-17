import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RootNavigator from './app/navigations/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
