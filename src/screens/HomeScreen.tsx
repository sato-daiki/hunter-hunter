import React, { useCallback, useEffect } from 'react';
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
import SubButton from '@/components/molecules/SubButton';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: NavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch: any = useDispatch();
  const userState: User = useSelector((state: any) => state.user);
  const { jenny, hightScore } = userState;
  const { isLoading, showAdReward } = useAdMobRewarded();

  useEffect(() => {
    const f = async () => {
      if (jenny === null && hightScore === null) {
        await dispatch(userActions.initStorage());
      }
    };
    f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressStart = useCallback(async () => {
    if (jenny) {
      await dispatch(userActions.updateJenny(jenny - 1));
      navigation.navigate('Quiz');
    }
  }, [jenny, dispatch, navigation]);

  const onPressAds = useCallback(() => {
    showAdReward();
  }, [showAdReward]);

  const onPressContant = useCallback(() => {
    navigation.navigate('WebView', {
      uri: 'https://forms.gle/NYgfxBoEJACxnKbE6',
      title: 'お問い合わせ',
    });
  }, [navigation]);

  return (
    <Layout enableSafeArea>
      <View style={styles.container}>
        <LoadingModal visible={isLoading} text='loading' />
        <View style={styles.header}>
          {hightScore !== null && (
            <Text style={styles.hightScore}>ハイスコア {hightScore}点</Text>
          )}
          <View style={styles.jennyContainer}>
            <Image source={Jenny} style={styles.jennyIcon} />
            <Text style={styles.jennyText}>{jenny}ジェニー</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Image source={HomeLogo} style={styles.homeLogo} />
          <Text style={styles.title}>この年で挑戦者か 血沸く血沸く♪</Text>
          <CommonButton
            containerStyle={styles.mainTextButton}
            isActive={!!jenny}
            isSquere
            title={'はじめる'}
            onPress={onPressStart}
          />
          <SubButton
            containerStyle={styles.textButton}
            isActive
            isSquere
            title={'動画広告を見てジェニーを貯める'}
            onPress={onPressAds}
          />
          <SubButton
            containerStyle={styles.textButton}
            isActive
            isSquere
            title={'お問い合わせ'}
            onPress={onPressContant}
          />
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
    justifyContent: 'space-between',
  },
  hightScore: {
    ...commonText.description,
  },
  jennyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 10,
  },
  title: {
    ...commonText.title,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  mainTextButton: {
    marginBottom: 10,
  },
  textButton: {
    marginBottom: 10,
  },
});

export default HomeScreen;
