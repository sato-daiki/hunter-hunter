import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Layout } from '@/components/atoms';
import { baseColor, commonText, textColor } from '@/styles/common';
import WhiteBoard from '@/components/molecules/WhiteBoard';
import { QUIZ_TOTAL_NUM, RULE_TITILE } from '@/config/common';

const ResultScreen: React.FC = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <WhiteBoard>
          <Text style={styles.title}>{RULE_TITILE}</Text>
        </WhiteBoard>
        <Text style={styles.description}>
          ●詳細{'\n'}
          {QUIZ_TOTAL_NUM}のクイズの中からランダムで50問を選び、問題を出します。
          90点以上で合格です。
          難易度はそこそこ高めです。自称オタクのみなさんの挑戦受け付けています。
          {'\n'}
          {'\n'}
          ●結果確認画面{'\n'}
          自称オタク（90点未満）の人はクイズの正当を見るのに動画広告を見る必要があります。
          {'\n'}
        </Text>
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
  title: {
    ...commonText.title,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    ...commonText.title,
    color: textColor,
    marginBottom: 30,
  },
});

export default ResultScreen;
