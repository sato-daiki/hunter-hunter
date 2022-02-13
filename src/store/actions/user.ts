import { Dispatch } from 'redux';

export const INIT_USER = 'INIT_USER';
export const UPDATE_JENNY = 'UPDATE_JENNY';
export const UPDATE_HIGHT_SCORE = 'UPDATE_HIGHT_SCORE';

export const updateJenny = (jenny: number) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    dispatch({ type: UPDATE_JENNY, jenny });
  };
};

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
