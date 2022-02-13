import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@/screens/HomeScreen';
import QuizScreen from '@/screens/QuizScreen';
import ResultScreen from '@/screens/ResultScreen';
import { DefaultNavigationOptions } from '@/config/NavigationOptions';
import { WebViewNavParams, WebViewScreen } from '@/screens/WebViewScreen';

export type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: { score: number };
  WebView: WebViewNavParams;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        ...DefaultNavigationOptions,
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Quiz'
        component={QuizScreen}
        options={{
          title: 'クイズ',
        }}
      />
      <Stack.Screen
        name='Result'
        component={ResultScreen}
        options={{
          title: '結果発表',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen name='WebView' component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
