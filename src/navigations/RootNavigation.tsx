import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DefaultNavigationOptions } from '@/config/NavigationOptions';
import HomeScreen from '@/screens/HomeScreen';
import QuizScreen from '@/screens/QuizScreen';
import ResultScreen from '@/screens/ResultScreen';

export type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: undefined;
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
    </Stack.Navigator>
  );
};

export default RootNavigation;
