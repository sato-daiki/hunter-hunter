import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import arrayShuffle from 'array-shuffle';

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
import { quizAll } from '@assets/quizAll';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: NavigationProp;
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch: any = useDispatch();
  const userState: User = useSelector((state: any) => state.user);

  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState<Quiz[]>([]);

  const { fadeAnim } = useOption();
  const { hightScore } = userState;

  useEffect(() => {
    const quizShuffle = arrayShuffle(quizAll);
    const newQuiz = quizShuffle.slice(0, NUMBER_QUESTION);
    setQuiz(newQuiz);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressItem = useCallback(
    async (optionId: string) => {
      let newScore = score;
      if (optionId === '0') {
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
    [dispatch, hightScore, navigation, number, score],
  );

  return (
    <Layout>
      <View style={styles.container}>
        {isLoading || !quiz ? (
          <Loading />
        ) : (
          <View style={styles.main}>
            <Text style={styles.number}>
              {number} / {NUMBER_QUESTION}
            </Text>
            <WhiteBoard>
              <Text style={styles.questionText}>{quiz[number].question}</Text>
            </WhiteBoard>
            <Animated.View style={{ opacity: fadeAnim }}>
              {quiz[number].options &&
                arrayShuffle(quiz[number].options).map((item) => (
                  <CommonButton
                    containerStyle={styles.button}
                    key={item.optionId}
                    title={item.text}
                    isActive
                    onPress={() => {
                      onPressItem(item.optionId);
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
