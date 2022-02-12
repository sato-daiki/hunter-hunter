import React from 'react';
import { StyleSheet, View } from 'react-native';

import { subColor } from '@/styles/common';

const WhiteBoard: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: subColor,
    padding: 10,
    marginBottom: 20,
  },
});

export default WhiteBoard;
