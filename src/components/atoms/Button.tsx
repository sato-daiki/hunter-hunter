import React, { ReactNode } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import { mainColor } from '@/styles/common';

export type ButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  isActive: boolean;
  isSquere?: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps & { children: ReactNode }> = ({
  containerStyle,
  isActive,
  isSquere = false,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderRadius: isSquere ? 10 : 142,
          elevation: isActive ? 8 : 2,
        },
        containerStyle,
      ]}
      activeOpacity={0.4}
      disabled={!isActive}
      onPress={onPress}
    >
      <View style={styles.innerStyle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColor,
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  innerStyle: {
    alignSelf: 'center',
  },
});

export default React.memo(Button);
