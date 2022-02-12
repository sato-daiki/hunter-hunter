import { StackNavigationOptions } from '@react-navigation/stack';

import { baseColor, commonText } from '@/styles/common';

export const DefaultNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: baseColor,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    ...commonText.title,
  },
};
