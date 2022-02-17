import { useCallback, useState, useEffect } from 'react';
import { AdMobRewarded, setTestDeviceIDAsync } from 'expo-ads-admob';
import * as userActions from '@/store/actions/user';

import { Platform } from 'react-native';
import { commonAlert } from '@/utils/alert';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/types/user';

const IOS_AD_UNIT_ID = 'ca-app-pub-0770181536572634/2216575001';
const ANDROID_AD_UNIT_ID = 'ca-app-pub-0770181536572634/2549755100';

export const useAdMobRewarded = () => {
  const dispatch: any = useDispatch();
  const userState: User = useSelector((state: any) => state.user);
  const { jenny } = userState;

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const f = async () => {
      AdMobRewarded.addEventListener(
        'rewardedVideoUserDidEarnReward',
        rewardedVideoUserDidEarnReward,
      );
      AdMobRewarded.addEventListener(
        'rewardedVideoDidFailToLoad',
        rewardedVideoDidFailToLoad,
      );
      // const { status } = await requestPermissionsAsync();
      // if (status !== 'granted') {
      //   setIsPermission(false);
      // } else {
      //   setIsPermission(true);
      // }
    };

    f();
    return (): void => {
      AdMobRewarded.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rewardedVideoUserDidEarnReward = useCallback(async () => {
    console.log('rewardedVideoUserDidEarnReward');
    // 広告をみた人が実行できる処理
    await dispatch(userActions.updateJenny(jenny ? jenny + 1 : 1));
  }, [jenny, dispatch]);

  const rewardedVideoDidFailToLoad = useCallback(() => {
    commonAlert({
      title: 'エラー',
      message: '動画再生においてエラーが発生しました',
      options: { cancelable: false },
    });
  }, []);

  const showAdReward = useCallback(async () => {
    setIsLoading(true);
    try {
      await setTestDeviceIDAsync('EMULATOR');
      await AdMobRewarded.setAdUnitID(
        Platform.OS === 'ios' ? IOS_AD_UNIT_ID : ANDROID_AD_UNIT_ID,
      );
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (err: any) {
      console.warn(err);
      rewardedVideoDidFailToLoad();
    }
    setIsLoading(false);
  }, [rewardedVideoDidFailToLoad]);

  return {
    isLoading,
    showAdReward,
  };
};
