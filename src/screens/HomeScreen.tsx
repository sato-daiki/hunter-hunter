import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '@/store/actions/user';
import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { baseColor } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';
import { useAdMobRewarded } from './hooks/useAdMobRewarded';
import LoadingModal from '@/components/atoms/LoadingModal';
import { User } from '@/types/user';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: NavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch: any = useDispatch();
  const userState: User = useSelector((state: any) => state.coins);
  const { coins } = userState;
  const { isLoading, showAdReward } = useAdMobRewarded();

  const onPressStart = useCallback(async () => {
    if (coins > 0) {
      await dispatch(userActions.updateCoins(coins - 1));
      navigation.navigate('Quiz');
    }
  }, [coins, dispatch, navigation]);

  const onPressAds = useCallback(() => {
    showAdReward();
  }, [showAdReward]);

  return (
    <Layout>
      <View style={styles.container}>
        <LoadingModal visible={isLoading} text='loading' />
        <Text>コイン {coins}</Text>
        <CommonButton
          containerStyle={styles.textButton}
          isActive={coins > 0}
          isSquere
          title={'始める'}
          onPress={onPressStart}
        />
        <CommonButton
          containerStyle={styles.textButton}
          isActive
          isSquere
          title={'動画を見てポイントを貯める'}
          onPress={onPressAds}
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

export default HomeScreen;
