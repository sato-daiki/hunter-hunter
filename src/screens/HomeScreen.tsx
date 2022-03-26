import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Image, Linking, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { baseColor, commonText } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';
import { User } from '@/types/user';
import { HomeLogo } from '@assets/';
import SubButton from '@/components/molecules/SubButton';
import { CONTACT_URL, HOME_TITILE } from '@/config/common';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: NavigationProp;
};

const MANGA_OTAKU = 'https://manga-otaku.com/';

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const userState: User = useSelector((state: any) => state.user);
  const { hightScore } = userState;

  const onPressStart = useCallback(async () => {
    navigation.navigate('Quiz');
  }, [navigation]);

  const onPressRule = useCallback(() => {
    navigation.navigate('Rule');
  }, [navigation]);

  const onPressOther = useCallback(() => {
    Linking.openURL(MANGA_OTAKU);
  }, []);

  const onPressContant = useCallback(() => {
    Linking.openURL(CONTACT_URL);
  }, []);

  return (
    <Layout enableSafeArea>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.hightScore}>
            {hightScore !== null && `ハイスコア ${hightScore}点`}
          </Text>
        </View>
        <View style={styles.main}>
          <Image source={HomeLogo} style={styles.homeLogo} />
          <Text style={styles.title}>{HOME_TITILE}</Text>
          <CommonButton
            containerStyle={styles.mainTextButton}
            isActive
            isSquere
            title={'はじめる'}
            onPress={onPressStart}
          />
          <SubButton
            containerStyle={styles.textButton}
            isActive
            isSquere
            title={'ルール'}
            onPress={onPressRule}
          />
          <SubButton
            containerStyle={styles.textButton}
            isActive
            isSquere
            title={'お問い合わせ'}
            onPress={onPressContant}
          />
          <SubButton
            containerStyle={styles.textButton}
            isActive
            isSquere
            title={'他の漫画オタク検定'}
            onPress={onPressOther}
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
    justifyContent: 'flex-end',
  },
  hightScore: {
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
    textAlign: 'center',
  },
  mainTextButton: {
    marginBottom: 10,
  },
  textButton: {
    marginBottom: 10,
  },
});

export default HomeScreen;
