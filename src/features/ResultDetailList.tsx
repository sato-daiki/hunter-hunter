import React, { useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Quiz, Option } from '@/types/quiz';
import {
  borderLightColor,
  commonText,
  green,
  red,
  textColor,
} from '@/styles/common';

interface Props {
  index: number;
  quiz: Quiz;
  answerOption: Option;
}

const ResultDetailList: React.FC<Props> = ({ index, quiz, answerOption }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {answerOption.optionId === '0' ? (
          <FontAwesome
            style={styles.icon}
            name='circle-o'
            size={30}
            color={green}
          />
        ) : (
          <FontAwesome style={styles.icon} name='close' size={30} color={red} />
        )}
        <Text style={styles.number}>問{index + 1}</Text>
      </View>
      <Text style={styles.question}>{quiz.question}</Text>
      <View style={styles.main}>
        <View style={styles.answerContainer}>
          <View style={styles.label}>
            <Text style={styles.labelText}>回答</Text>
          </View>
          <Text style={styles.value}>{answerOption.text}</Text>
        </View>
        <View style={styles.correctContainer}>
          <View style={[styles.label, { borderColor: textColor }]}>
            <Text style={[styles.labelText, { color: textColor }]}>正解</Text>
          </View>
          <Text style={[styles.value, { color: textColor }]}>
            {quiz.options[0].text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: borderLightColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  number: {
    ...commonText.title,
    color: textColor,
  },
  question: {
    ...commonText.title,
    fontWeight: 'bold',
    color: textColor,
    marginBottom: 12,
  },
  main: {
    flexDirection: 'row',
  },
  answerContainer: {
    flex: 1,
  },
  correctContainer: {
    flex: 1,
  },
  label: {
    width: 40,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: textColor,
  },
  labelText: {
    ...commonText.description,
    color: textColor,
    textAlign: 'center',
  },
  value: {
    ...commonText.description,
    color: textColor,
  },
});

export default React.memo(ResultDetailList);
