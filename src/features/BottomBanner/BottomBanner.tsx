import React, { useCallback, useEffect, useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import {
  AdMobBanner,
  setTestDeviceIDAsync,
  requestPermissionsAsync,
} from 'expo-ads-admob';

const IOS_AD_UNIT_ID = 'ca-app-pub-0770181536572634/4764854907';
const ANDROID_AD_UNIT_ID = 'ca-app-pub-0770181536572634/2162742296';

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
            bannerSize='banner'
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
