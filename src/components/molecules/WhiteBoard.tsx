import React from 'react';
import { StyleSheet, View } from 'react-native';

import { subColor } from '@/styles/common';

const WhiteBoard: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 5,
    borderColor: '#000',
    backgroundColor: subColor,
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
});

export default WhiteBoard;
