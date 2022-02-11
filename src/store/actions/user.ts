import { Dispatch } from 'redux';

export const UPDATE_COINS = 'UPDATE_COINS';
export const UPDATE_VIBRATION = 'UPDATE_VIBRATION';

export const updateCoins = (jenny: number) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    dispatch({ type: UPDATE_COINS, jenny });
  };
};
