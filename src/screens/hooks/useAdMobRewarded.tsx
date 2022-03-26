import { useCallback, useState, useEffect } from 'react';
import { AdMobRewarded, setTestDeviceIDAsync } from 'expo-ads-admob';

import { Platform } from 'react-native';
import { commonAlert } from '@/utils/alert';
import { ANDROID_AD_REWARD_ID, IOS_AD_REWARD_ID } from '@/config/common';

type Props = {
  afterEarn: () => void;
};

export const useAdMobRewarded = ({ afterEarn }: Props) => {
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
    };

    f();
    return (): void => {
      AdMobRewarded.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rewardedVideoUserDidEarnReward = useCallback(async () => {
    // 広告をみた人が実行できる処理
    console.log('rewardedVideoUserDidEarnReward');
    await afterEarn();
  }, [afterEarn]);

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
        Platform.OS === 'ios' ? IOS_AD_REWARD_ID : ANDROID_AD_REWARD_ID,
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
