import React, {useCallback, useLayoutEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface WebViewNavParams {
  uri?: string;
  title?: string;
}

type Props = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{screen: WebViewNavParams}, 'screen'>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export const WebViewLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

export const WebViewScreen: React.FC<Props> = ({navigation, route}) => {
  const uri = route.params.uri;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // ReactNavigationのジェスチャーを無効化した上で、WebViewのGestureをallowすることで、ジェスチャーで戻れるように
      gestureEnabled: false,
      title: route.params.title,
    });
  }, [navigation, route.params.title]);

  const webView = React.useRef<WebView>(null);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation, onPressBack, route.params.title]);

  if (!uri) {
    return <View />;
  }

  return (
    <WebView
      ref={webView}
      source={{uri}}
      renderLoading={WebViewLoading}
      startInLoadingState
      allowsBackForwardNavigationGestures
      androidHardwareAccelerationDisabled
    />
  );
};
