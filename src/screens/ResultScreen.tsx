import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, Text, Share } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as StoreReview from 'expo-store-review';

import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { baseColor, commonText } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';
import WhiteBoard from '@/components/molecules/WhiteBoard';
import { RouteProp } from '@react-navigation/native';
import { APP_URL, getMessage } from '@/config/common';
import { Message } from '@/types/message';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: NavigationProp;
  route: RouteProp<RootStackParamList, 'Result'>;
};

const ResultScreen: React.FC<Props> = ({ navigation, route }) => {
  const messege: Message = useMemo(() => {
    return getMessage(route.params.score);
  }, [route.params.score]);

  const onPressStart = useCallback(async () => {
    navigation.navigate('Home');
    if (await StoreReview.hasAction()) {
      await StoreReview.requestReview();
    }
  }, [navigation]);

  const onPressTweet = useCallback(async () => {
    try {
      const result = await Share.share({
        message: `HUNTER検定の結果${route.params.score}点${messege.title}${messege.description} ${APP_URL}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      alert(error.message);
    }
  }, [messege.description, messege.title, route.params.score]);

  return (
    <Layout>
      <View style={styles.container}>
        <WhiteBoard>
          <Text style={styles.title}>{messege.title}</Text>
          <Text style={styles.description}>{messege.description}</Text>
          <Text style={styles.score}>{route.params.score} 点</Text>
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
  title: {
    ...commonText.lTitle,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    ...commonText.title,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  score: {
    ...commonText.lllTitle,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textButton: {
    marginBottom: 11,
  },
});

export default ResultScreen;
