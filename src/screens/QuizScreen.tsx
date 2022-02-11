import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { baseColor, commonText, textGrayColor } from '@/styles/common';
import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { RootStackParamList } from '@/navigations/RootNavigation';
import Loading from '@/components/atoms/Loading';
import { Quiz } from '@/types/quiz';
import { useOption } from '@/screens/hooks/useQuiz';
import { NUMBER_QUESTION } from '@/config/common';
import WhiteBoard from '@/components/molecules/WhiteBoard';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: NavigationProp;
};

const quiz: Quiz = {
  quizId: '1',
  question:
    '1921(大正10)年の今日(2月11日)は、グリコキャラメルが発売された日だそうです。甘いグリコのキャラメルは今も昔も子供の憧れ。かわいいハート型をしていますが、グリコが発売された当時もハート型だった。◯か×か。',
  options: [
    {
      quizOptionId: '1',
      text: 'aaa',
    },
    {
      quizOptionId: '2',
      text: 'aaa',
    },
    {
      quizOptionId: '3',
      text: 'aaa',
    },
    {
      quizOptionId: '4',
      text: 'aaa',
    },
    {
      quizOptionId: '5',
      text: 'aaa',
    },
  ],
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(1);

  const { fadeAnim } = useOption();

  const onPressItem = useCallback(
    (quizOptionId: string) => {
      console.log('quizOptionId', isLoading);
      navigation.navigate('Result');
    },
    [isLoading, navigation],
  );

  return (
    <Layout>
      <View style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={styles.main}>
            <Text style={styles.number}>
              {number} / {NUMBER_QUESTION}
            </Text>
            <WhiteBoard>
              <Text style={styles.questionText}>{quiz.question}</Text>
            </WhiteBoard>
            <Animated.View style={{ opacity: fadeAnim }}>
              {quiz.options &&
                quiz.options.map((item, index) => (
                  <CommonButton
                    containerStyle={styles.button}
                    key={item.quizOptionId}
                    title={item.text}
                    isActive
                    onPress={() => {
                      onPressItem(item.quizOptionId);
                    }}
                  />
                ))}
            </Animated.View>
          </View>
        )}
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
  main: {
    flex: 1,
  },
  number: {
    ...commonText.number,
    color: textGrayColor,
    textAlign: 'right',
    marginBottom: 8,
  },
  questionText: {
    ...commonText.title,
    color: '#fff',
  },
  button: {
    marginBottom: 10,
  },
});

export default QuizScreen;
