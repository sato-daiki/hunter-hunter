import { StyleSheet } from 'react-native';

// 修正
export const baseColor = '#F5F5F5';
export const textColor = '#3E3E3E';
export const mainColor = '#840303';
export const subColor = '#2A3A3A';

// 基本固定
export const borderLightColor = '#CCCCCC';
export const textGrayColor = '#888888';
export const green = '#6FCF97';
export const red = '#EB5757';

export const commonText = StyleSheet.create({
  lllTitle: {
    fontSize: 32,
    lineHeight: 40,
    color: mainColor,
  },
  llTitle: {
    fontSize: 28,
    lineHeight: 36,
    color: mainColor,
  },
  lTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: mainColor,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: mainColor,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: mainColor,
  },
  subText: {
    fontSize: 12,
    lineHeight: 18,
    color: mainColor,
  },
  note: {
    fontSize: 9,
    lineHeight: 15,
    color: mainColor,
  },
  number: {
    fontSize: 24,
    lineHeight: 30,
    color: mainColor,
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
