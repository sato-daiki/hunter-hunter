import { Dispatch } from 'redux';

export const INIT_USER = 'INIT_USER';
export const UPDATE_HIGHT_SCORE = 'UPDATE_HIGHT_SCORE';

export const updateHightScore = (hightScore: number) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    dispatch({ type: UPDATE_HIGHT_SCORE, hightScore });
  };
};

export const initStorage = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: INIT_USER });
  };
};
