import * as React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {baseColor} from '@/styles/common';

const Loading: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#ccc" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(Loading);
