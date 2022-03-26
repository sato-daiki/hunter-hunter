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
import { getMessage, SHARE_URL, TITLE } from '@/config/common';
import { Message } from '@/types/message';
import SubButton from '@/components/molecules/SubButton';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: NavigationProp;
  route: RouteProp<RootStackParamList, 'Result'>;
};

const ResultScreen: React.FC<Props> = ({ navigation, route }) => {
  const messege: Message = useMemo(() => {
    return getMessage(route.params.score);
  }, [route.params.score]);

  const onPressHome = useCallback(async () => {
    navigation.navigate('Home');
    if (await StoreReview.hasAction()) {
      await StoreReview.requestReview();
    }
  }, [navigation]);

  const onPressShare = useCallback(async () => {
    try {
      const result = await Share.share({
        message: `${TITLE}の結果→${route.params.score}点\n${messege.title}\n${messege.description}\n${SHARE_URL}\n#漫画オタク検定`,
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

  const goToResultDetail = useCallback(async () => {
    navigation.navigate('ResultDetail', {
      quiz: route.params.quiz,
      answerOptions: route.params.answerOptions,
    });
  }, [navigation, route.params.answerOptions, route.params.quiz]);

  return (
    <Layout>
      <View style={styles.container}>
        <WhiteBoard>
          <Text style={styles.title}>{messege.title}</Text>
          <Text style={styles.description}>{messege.description}</Text>
          <Text style={styles.score}>{route.params.score} 点</Text>
        </WhiteBoard>
        <CommonButton
          containerStyle={styles.mainTextButton}
          isActive
          isSquere
          title={'結果を見る'}
          textStyle={{ textAlign: 'center' }}
          onPress={goToResultDetail}
        />
        <SubButton
          containerStyle={styles.textButton}
          isActive
          isSquere
          title={'シェアする'}
          onPress={onPressShare}
        />
        <SubButton
          containerStyle={styles.textButton}
          isActive
          isSquere
          title={'ホームへ'}
          onPress={onPressHome}
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
  mainTextButton: {
    marginBottom: 10,
  },
  textButton: {
    marginBottom: 10,
  },
});

export default ResultScreen;
