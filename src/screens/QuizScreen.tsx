import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import * as userActions from '@/store/actions/user';
import { baseColor, commonText, textGrayColor } from '@/styles/common';
import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { RootStackParamList } from '@/navigations/RootNavigation';
import Loading from '@/components/atoms/Loading';
import { Quiz } from '@/types/quiz';
import { useOption } from '@/screens/hooks/useQuiz';
import { NUMBER_QUESTION } from '@/config/common';
import WhiteBoard from '@/components/molecules/WhiteBoard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/types/user';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: NavigationProp;
};

const mocQuiz: Quiz = {
  quizId: '1',
  question:
    '1921(大正10)年の今日(2月11日)は、グリコキャラメルが発売された日だそうです。甘いグリコのキャラメルは今も昔も子供の憧れ。かわいいハート型をしていますが、グリコが発売された当時もハート型だった。◯か×か。',
  correctOptionId: '1',
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

const mocQuizs: Quiz[] = [mocQuiz, mocQuiz, mocQuiz, mocQuiz];

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch: any = useDispatch();
  const userState: User = useSelector((state: any) => state.user);

  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [quizs, setQuizs] = useState<Quiz[]>([]);

  const { fadeAnim } = useOption();
  const { hightScore } = userState;

  useEffect(() => {
    setQuizs(mocQuizs);
    setIsLoading(false);
  }, []);

  const onPressItem = useCallback(
    async (quizOptionId: string) => {
      let newScore = score;
      if (quizOptionId === quizs[number].correctOptionId) {
        newScore += 1;
        setScore(newScore);
      }

      const nextNumber = number + 1;
      setNumber(nextNumber);

      if (nextNumber === NUMBER_QUESTION - 1) {
        if (!hightScore || newScore > hightScore) {
          await dispatch(userActions.updateHightScore(newScore));
        }
        // 0始まりのため-1している
        navigation.navigate('Result', { score: newScore });
      }
    },
    [dispatch, hightScore, navigation, number, quizs, score],
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
              <Text style={styles.questionText}>{quizs[number].question}</Text>
            </WhiteBoard>
            <Animated.View style={{ opacity: fadeAnim }}>
              {quizs[number].options &&
                quizs[number].options.map((item, index) => (
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
