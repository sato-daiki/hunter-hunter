import React, { useRef, useEffect } from 'react';
import { AppState, AppStateStatus, StatusBar } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BottomBanner from '@/features/BottomBanner';
import RootNavigation from '@/navigations/RootNavigation';
import userReducer from '@/store/reducers/user';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/atoms/Loading';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

const App = () => {
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    console.log('App useEffect');

    // dispatch(userActions.initStorage());
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
      <PersistGate loading={<Loading />} persistor={persistor}>
        <StatusBar barStyle='dark-content' />
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
        <BottomBanner />
      </PersistGate>
    </Provider>
  );
};

export default App;
