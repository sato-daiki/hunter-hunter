import React, { useCallback, useEffect, useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import {
  AdMobBanner,
  setTestDeviceIDAsync,
  requestPermissionsAsync,
} from 'expo-ads-admob';
import { ANDROID_AD_UNIT_ID, IOS_AD_UNIT_ID } from '@/config/common';

const BottomBanner: React.FC = () => {
  const [loadingAdmobError, setLoadingAdmobError] = useState(false);
  const [isPermission, setIsPermission] = useState(false);

  useEffect(() => {
    const f = async () => {
      const { status } = await requestPermissionsAsync();
      console.log('status', status);
      if (status !== 'granted') {
        setIsPermission(false);
      } else {
        setIsPermission(true);
      }
      await setTestDeviceIDAsync('EMULATOR');
    };
    f();
  }, []);

  const onErrorLoadingAdMob = useCallback(() => {
    setLoadingAdmobError(true);
  }, []);

  const renderAds = useCallback(() => {
    if (!loadingAdmobError) {
      return (
        <View style={styles.adMobBanner}>
          <AdMobBanner
            bannerSize='smartBannerPortrait'
            adUnitID={
              Platform.OS === 'ios' ? IOS_AD_UNIT_ID : ANDROID_AD_UNIT_ID
            }
            servePersonalizedAds={isPermission}
            onDidFailToReceiveAdWithError={onErrorLoadingAdMob}
          />
        </View>
      );
    }

    return null;
  }, [isPermission, loadingAdmobError, onErrorLoadingAdMob]);

  return <View>{renderAds()}</View>;
};

const styles = StyleSheet.create({
  adMobBanner: {
    alignItems: 'center',
  },
});

export default BottomBanner;
