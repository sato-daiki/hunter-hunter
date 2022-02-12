import React, { useRef, useEffect } from 'react';
import { AppState, AppStateStatus, StatusBar } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BottomBanner from '@/features/BottomBanner/BottomBanner';
import RootNavigation from '@/navigations/RootNavigation';
import userReducer from '@/store/reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    console.log('[handleAppStateChange]', nextAppState);
    appState.current = nextAppState;
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      <BottomBanner />
    </Provider>
  );
};

export default App;
