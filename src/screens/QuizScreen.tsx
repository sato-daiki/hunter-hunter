import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import arrayShuffle from 'array-shuffle';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '@/store/actions/user';
import { baseColor, commonText, textColor } from '@/styles/common';
import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { RootStackParamList } from '@/navigations/RootNavigation';
import Loading from '@/components/atoms/Loading';
import { Quiz, Option } from '@/types/quiz';
import { NUMBER_QUESTION, TIMEOUT_OPTION_ID } from '@/config/common';
import WhiteBoard from '@/components/molecules/WhiteBoard';
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
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [key, setKey] = useState('');

  const score = useRef<number>(0);
  const answerOptions = useRef<Option[]>([]);

  const { jenny, hightScore } = userState;

  useEffect(() => {
    const quizShuffle = arrayShuffle(quizAll);
    const newQuiz = quizShuffle.slice(0, NUMBER_QUESTION);
    setQuiz(newQuiz);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressLeft = useCallback(() => {
    Alert.alert('注意', '本当に終了してもよろしいですか？', [
      {
        text: 'キャンセル',
        style: 'cancel',
      },
      {
        text: 'はい',
        onPress: () => {
          navigation.goBack();
        },
      },
    ]);
  }, [navigation]);

  /**
   * ヘッダーに初期値設定
   */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={onPressLeft}>
          <Text style={styles.quit}>やめる</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, onPressLeft]);

  const onPressItem = useCallback(
    async (option: Option) => {
      if (option.optionId === '0') {
        score.current = score.current + 1;
      }
      answerOptions.current.push(option);
      const nextNumber = number + 1;
      if (nextNumber !== NUMBER_QUESTION) {
        setKey(quiz[number].quizId);
        setNumber(nextNumber);
      } else {
        setIsLoading(true);
        if (!hightScore || score.current > hightScore) {
          await dispatch(userActions.updateHightScore(score.current));
        }
        if (score.current >= 90) {
          await dispatch(userActions.updateJenny(jenny ? jenny + 1 : 1));
        }
        navigation.navigate('Result', {
          score: score.current,
          quiz,
          answerOptions: answerOptions.current,
        });
      }
    },
    [dispatch, hightScore, jenny, navigation, number, quiz],
  );

  const onComplete = useCallback(() => {
    onPressItem({ optionId: TIMEOUT_OPTION_ID, text: '' });
  }, [onPressItem]);

  return (
    <Layout>
      <View style={styles.container}>
        {isLoading || !quiz ? (
          <Loading />
        ) : (
          <View style={styles.main}>
            <View style={styles.header}>
              <Text style={styles.number}>
                {number + 1} / {NUMBER_QUESTION}
              </Text>
              <View style={styles.timer}>
                <CountdownCircleTimer
                  isPlaying
                  key={key}
                  size={30}
                  strokeWidth={3}
                  duration={20}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[15, 10, 5, 0]}
                  onComplete={onComplete}
                >
                  {({ remainingTime }) => (
                    <Text style={styles.remainingTime}>{remainingTime}</Text>
                  )}
                </CountdownCircleTimer>
              </View>
            </View>
            <WhiteBoard>
              <Text style={styles.questionText}>{quiz[number].question}</Text>
            </WhiteBoard>
            <View>
              {quiz[number].options &&
                arrayShuffle(quiz[number].options).map((item, index) => (
                  <CommonButton
                    containerStyle={styles.button}
                    key={index}
                    title={item.text}
                    isActive
                    isSquere
                    onPress={() => {
                      onPressItem(item);
                    }}
                  />
                ))}
            </View>
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
  },
  quit: {
    ...commonText.description,
    color: '#000',
    paddingHorizontal: 10,
  },
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  number: {
    ...commonText.title,
    color: textColor,
    textAlign: 'right',
  },
  timer: {
    position: 'absolute',
    right: 0,
  },
  remainingTime: {
    ...commonText.description,
    color: textColor,
  },
  questionText: {
    ...commonText.title,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 10,
  },
});

export default QuizScreen;
