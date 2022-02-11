import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

import { commonText, textGrayColor } from '@/styles/common';
import Button from '../atoms/Button';

export type CommonButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isActive: boolean;
  isSquere?: boolean; //true 四角のボタン false 丸いボタン
  onPress: () => void;
};

const CommonButton: React.FC<CommonButtonProps> = ({
  containerStyle,
  textStyle,
  isActive,
  isSquere = false,
  title,
  onPress,
}) => {
  return (
    <Button
      containerStyle={containerStyle}
      isActive={isActive}
      isSquere={isSquere}
      onPress={onPress}
    >
      <Text
        style={[
          commonText.description,
          isActive ? styles.text : { color: textGrayColor },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});

export default CommonButton;
