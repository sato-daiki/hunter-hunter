import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '@/store/actions/user';
import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { baseColor, commonText } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';
import { useAdMobRewarded } from './hooks/useAdMobRewarded';
import LoadingModal from '@/components/atoms/LoadingModal';
import { User } from '@/types/user';
import { HomeLogo, Jenny } from '@assets/';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: NavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch: any = useDispatch();
  const userState: User = useSelector((state: any) => state.user);
  const { jenny, hightScore } = userState;
  const { isLoading, showAdReward } = useAdMobRewarded();

  const onPressStart = useCallback(async () => {
    if (jenny > 0) {
      await dispatch(userActions.updateCoins(jenny - 1));
      navigation.navigate('Quiz');
    }
  }, [jenny, dispatch, navigation]);

  const onPressAds = useCallback(() => {
    showAdReward();
  }, [showAdReward]);

  return (
    <Layout enableSafeArea>
      <View style={styles.container}>
        <LoadingModal visible={isLoading} text='loading' />
        <View style={styles.header}>
          <Image source={Jenny} style={styles.jennyIcon} />
          <Text style={styles.jennyText}>{jenny}ジェニー</Text>
        </View>
        <View style={styles.main}>
          <Image source={HomeLogo} style={styles.homeLogo} />

          <CommonButton
            containerStyle={styles.textButton}
            isActive={jenny > 0}
            isSquere
            title={'はじめる'}
            onPress={onPressStart}
          />
          <CommonButton
            containerStyle={styles.textButton}
            isActive
            isSquere
            title={'動画を見てポイントを貯める'}
            onPress={onPressAds}
          />
          {hightScore !== null && (
            <Text style={styles.hightScore}>ハイスコア {hightScore}</Text>
          )}
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  jennyIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  jennyText: {
    ...commonText.description,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeLogo: {
    width: 300,
    height: 120,
    marginBottom: 20,
  },
  hightScore: {
    ...commonText.title,
    marginBottom: 20,
  },
  textButton: {
    marginBottom: 10,
  },
});

export default HomeScreen;
