import { User } from '@/types/user';
import { UPDATE_COINS, UPDATE_VIBRATION } from '../actions/user';

const initialState: User = {
  coins: 0,
  vibration: true,
};

export default (state = initialState, action: any): User => {
  switch (action.type) {
    case UPDATE_COINS:
      return {
        ...state,
        coins: action.coins,
      };
    case UPDATE_VIBRATION:
      return {
        ...state,
        coins: action.coins,
      };
    default:
      return state;
  }
};
