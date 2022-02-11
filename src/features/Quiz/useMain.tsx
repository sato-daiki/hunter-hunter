import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export const useOption = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const elevation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(elevation, {
        toValue: 12,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, 500);
  }, [elevation, fadeAnim]);

  return {
    fadeAnim,
    elevation,
  };
};
