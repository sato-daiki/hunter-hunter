import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { subColor } from '@/styles/common';

interface Props {
  onTimeUp: (id: string) => void;
}

const Timer: React.FC<Props> = ({ onTimeUp }) => {
  // const [fontsLoaded] = useFonts({
  //   // eslint-disable-next-line global-require
  //   RobotoMono: require('../../styles/fonts/RobotoMono-Regular.ttf'),
  // });

  const [remainingSecs, setRemainingSecs] = useState(1800);

  useEffect(() => {
    if (!remainingSecs) {
      onTimeUp('99');
      return;
    }

    const interval = setInterval(() => {
      setRemainingSecs(remainingSecs - 1);
    }, 1000);
    return (): void => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSecs]);

  return (
    <Text
      style={[
        styles.text,
        {
          color: remainingSecs <= 5 ? 'red' : 'black',
        },
      ]}
    >
      {remainingSecs}
    </Text>
  );
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

export default Timer;
