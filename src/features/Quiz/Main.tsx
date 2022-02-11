import * as React from 'react';
import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';

import { Enquete } from '@/types/deliveredContent';
import QuestionAndImage from '../Common/QuestionAndImage';
import AnswerButton from '../Common/AnswerButton';
import CommonTemplate from '../Common/CommonTemplate';
import { useOption } from './useOption';
import { useSelector } from 'react-redux';
import { Flags } from '@/types/flags';

type Props = {
  isShuffle: boolean;
  showLeftIcon: boolean;
  enquete: Enquete;
  onPressHandler: (enqueteOptionId: string, index: number) => void;
  onPressLeftIcon: () => void;
};

const QuestionAndAnswers: React.FC<Props> = ({
  showLeftIcon,
  enquete,
  onPressHandler,
  onPressLeftIcon,
}) => {
  const { fadeAnim } = useOption();
  const onPressItem = useCallback(
    (enqueteOptionId: string, index: number) => {
      onPressHandler(enqueteOptionId, index);
    },
    [onPressHandler],
  );

  return (
    <>
      <QuestionAndImage
        isScroll={flags.fontSizeLarge}
        question={enquete.question}
        imageUrl={enquete.imageUrl}
        showLeftIcon={showLeftIcon}
        leftIcon={'back'}
        enqueteTypeOrder={enquete.enqueteTypeOrder}
        onPressLeftIcon={onPressLeftIcon}
      />
      <Animated.View style={{ opacity: fadeAnim }}>
        {enquete.options &&
          enquete.options.map((item, index) => (
            <AnswerButton
              key={item.enqueteOptionId}
              isActive
              title={item.text}
              onPress={() => {
                onPressItem(item.enqueteOptionId, index);
              }}
            />
          ))}
      </Animated.View>
    </>
  );
};

export default QuestionAndAnswers;
