import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Layout } from '@/components/atoms';
import { baseColor, commonText } from '@/styles/common';
import { RootStackParamList } from '@/navigations/RootNavigation';
import { RouteProp } from '@react-navigation/native';
import { Quiz } from '@/types/quiz';
import ResultDetailList from '@/features/ResultDetailList';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: NavigationProp;
  route: RouteProp<RootStackParamList, 'Result'>;
};

const ResultDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const renderItem: ListRenderItem<Quiz> = useCallback(
    ({ item, index }) => {
      return (
        <ResultDetailList
          index={index}
          quiz={item}
          answerOption={route.params.answerOptions[index]}
        />
      );
    },
    [route.params.answerOptions],
  );

  return (
    <Layout disableScroll>
      <View style={styles.container}>
        <FlatList
          data={route.params.quiz}
          keyExtractor={(item: Quiz): string => item.quizId!}
          renderItem={renderItem}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor,
    paddingVertical: 16,
  },
  result: {
    ...commonText.title,
    color: '#fff',
    alignSelf: 'center',
  },
  title: {
    ...commonText.lTitle,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    ...commonText.title,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  score: {
    ...commonText.lllTitle,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textButton: {
    marginBottom: 11,
  },
});

export default ResultDetailScreen;
