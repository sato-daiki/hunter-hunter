import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { baseColor, commonText, textColor } from '@/styles/common';

export const DefaultNavigationOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: baseColor,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    ...commonText.title,
    color: textColor,
  },
  headerBackTitle: '戻る',
  headerTintColor: textColor,
};
