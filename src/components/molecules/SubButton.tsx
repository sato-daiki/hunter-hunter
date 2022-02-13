import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

import {
  baseColor,
  commonText,
  mainColor,
  textGrayColor,
} from '@/styles/common';
import Button from '../atoms/Button';

export type SubButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isActive: boolean;
  isSquere?: boolean; //true 四角のボタン false 丸いボタン
  onPress: () => void;
};

const SubButton: React.FC<SubButtonProps> = ({
  containerStyle,
  textStyle,
  isActive,
  isSquere = false,
  title,
  onPress,
}) => {
  return (
    <Button
      containerStyle={[styles.container, containerStyle]}
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
  container: {
    backgroundColor: baseColor,
    borderColor: mainColor,
    borderWidth: 1,
  },
  text: {
    color: mainColor,
    fontWeight: 'bold',
  },
});

export default SubButton;
