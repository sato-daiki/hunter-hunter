import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { baseColor, commonText } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';
import WhiteBoard from '@/components/molecules/WhiteBoard';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: NavigationProp;
};

const ResultScreen: React.FC<Props> = ({ navigation }) => {
  const onPressStart = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const onPressTweet = useCallback(() => {}, []);

  return (
    <Layout>
      <View style={styles.container}>
        <WhiteBoard>
          <Text style={styles.result}>結果</Text>
          <Text style={styles.score}>100 点</Text>
          <Text style={styles.description}>おぬしなかなかやるな</Text>
        </WhiteBoard>
        <CommonButton
          containerStyle={styles.textButton}
          isActive
          isSquere
          title={'ホームへ'}
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
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  result: {
    ...commonText.title,
    color: '#fff',
    alignSelf: 'center',
  },
  score: {
    ...commonText.lllTitle,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
  },
  description: {
    ...commonText.title,
    color: '#fff',
    alignSelf: 'center',
  },
  textButton: {
    marginBottom: 11,
  },
});

export default ResultScreen;
