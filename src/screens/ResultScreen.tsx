import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { baseColor } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: NavigationProp;
};

const ResultScreen: React.FC<Props> = ({ navigation }) => {
  const onPressStart = useCallback(() => {
    navigation.navigate('Quiz');
  }, [navigation]);

  const onPressTweet = useCallback(() => {}, []);

  return (
    <Layout>
      <View style={styles.container}>
        <Text>結果</Text>
        <CommonButton
          containerStyle={styles.textButton}
          isActive
          isSquere
          title={'もう一度やる'}
          onPress={onPressStart}
        />
        <CommonButton
          containerStyle={styles.textButton}
          isActive
          isSquere
          title={'ツイートする'}
          onPress={onPressTweet}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  textButton: {
    marginBottom: 11,
  },
});

export default ResultScreen;
