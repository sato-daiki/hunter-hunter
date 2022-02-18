import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/screens/HomeScreen';
import QuizScreen from '@/screens/QuizScreen';
import ResultScreen from '@/screens/ResultScreen';
import { DefaultNavigationOptions } from '@/config/NavigationOptions';
import { WebViewNavParams, WebViewScreen } from '@/screens/WebViewScreen';
import { Quiz, Option } from '@/types/quiz';
import ResultDetailScreen from '@/screens/ResultDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: { score: number; quiz: Quiz[]; answerOptions: Option[] };
  ResultDetail: { quiz: Quiz[]; answerOptions: Option[] };
  WebView: WebViewNavParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen
        name='ResultDetail'
        component={ResultDetailScreen}
        options={{
          title: '詳細',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen name='WebView' component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
