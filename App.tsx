import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
import {retrieveFavoritePeopleDataAction} from './src/store/actions/favoriteAction';

const App = () => {
  useEffect(() => {
    store.dispatch(retrieveFavoritePeopleDataAction());
  }, []);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
