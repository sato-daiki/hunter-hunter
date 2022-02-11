import { StorageKey } from '@/config/storage';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UPDATE_JENNY = 'UPDATE_JENNY';
export const UPDATE_HIGHT_SCORE = 'UPDATE_HIGHT_SCORE';

export const updateJenny = (jenny: number) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    dispatch({ type: UPDATE_JENNY, jenny });
    saveJennyToStorage(jenny);
  };
};

const saveJennyToStorage = (jenny: number) => {
  try {
    AsyncStorage.setItem(StorageKey.jenny, jenny.toString());
  } catch (error) {
    // logSentry(error);
  }
};

export const updateHightScore = (hightScore: number) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    dispatch({ type: UPDATE_HIGHT_SCORE, hightScore });
    saveHightScoreToStorage(hightScore);
  };
};

const saveHightScoreToStorage = (hightScore: number) => {
  try {
    AsyncStorage.setItem(StorageKey.hightScore, hightScore.toString());
  } catch (error) {
    // logSentry(error);
  }
};
