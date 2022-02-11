import React, {ReactNode, useCallback} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  View,
  Vibration,
} from 'react-native';
import {useSelector} from 'react-redux';
import {VIBRATION_PATTERN} from '@/config/common';
import {buttonColor} from '@/styles/common';
import {Flags} from '@/types/flags';

export type ButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  isActive: boolean;
  isSquere?: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps & {children: ReactNode}> = ({
  containerStyle,
  isActive,
  isSquere = false,
  onPress,
  children,
}) => {
  const flags: Flags = useSelector((state: any) => state.flags);

  const handlePress = useCallback(() => {
    onPress();
    if (flags.vibration) {
      Vibration.vibrate(VIBRATION_PATTERN, false);
    }
  }, [flags.vibration, onPress]);

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
      onPress={!flags.longPress ? handlePress : undefined}
      onLongPress={flags.longPress ? handlePress : undefined}
      delayLongPress={100}
    >
      <View style={styles.innerStyle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: buttonColor,
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
