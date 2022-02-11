import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { baseColor } from '@/styles/common';
import { Layout } from '@/components/atoms';
import CommonButton from '@/components/molecules/CommonButton';
import { RootStackParamList } from '@/navigations/RootNavigation';
import Loading from '@/components/atoms/Loading';
import { Quiz } from '@/types/quiz';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: NavigationProp;
};

const quiz: Quiz = {
  quizId: '1',
  question: 'aaa',
  options: [
    {
      quizOptionId: '1',
      text: 'aaa',
    },
  ],
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onPressItem = useCallback((quizOptionId: string) => {
    console.log('quizOptionId', isLoading);
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={styles.main}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>問題</Text>
            </View>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  textButton: {
    marginBottom: 11,
  },
});

export default QuizScreen;
