import { StyleSheet } from 'react-native';

export const textColor = '#3E3E3E';
export const textGrayColor = '#888888';
export const textWhiteColor = '#F5F5F5';
export const linkTextColor = '#65D0FC';
export const baseColor = '#F6F2EC';
export const buttonColor = '#FCFAF8';
export const borderColor = '#C4C4C4';

export const yellow = '#FFDD5D';
export const yellow2 = '#F2C94C';
export const green = '#6FCF97';
export const gray = '#707070';
export const orange = '#FF9519';
export const orangeThin = '#FFB257';
export const orangeBack = '#DEDEDE';
export const red = '#EB5757';

export const pink = '#FCB4AC';
export const transparentBlack = 'rgba(62, 62, 62, 0.4)';
export const transparentBaseColor = 'rgba(246, 242, 236, 0.4)';

export const commonText = StyleSheet.create({
  lllTitle: {
    fontSize: 32,
    lineHeight: 40,
    color: textColor,
  },
  llTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: textColor,
  },
  lTitle: {
    fontSize: 20,
    lineHeight: 30,
    color: textColor,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: textColor,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: textColor,
  },
  subText: {
    fontSize: 12,
    lineHeight: 18,
    color: textColor,
  },
  note: {
    fontSize: 9,
    lineHeight: 15,
    color: textColor,
  },
  number: {
    fontSize: 24,
    lineHeight: 30,
    color: textColor,
  },
});

export const neomorphStyle: any = {
  shadowRadius: 2,
  shadowOffset: {
    width: 4,
    height: 4,
  },
};

export const neomorphStrongStyle: any = {
  shadowOpacity: 0.4,
  shadowRadius: 4,
  shadowOffset: {
    width: 3,
    height: 3,
  },
};
