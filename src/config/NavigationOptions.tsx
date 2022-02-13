import { StackNavigationOptions } from '@react-navigation/stack';

import { baseColor, commonText, textColor } from '@/styles/common';

export const DefaultNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: baseColor,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    ...commonText.title,
    color: textColor,
  },
};
