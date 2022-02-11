import { User } from '@/types/user';
import { UPDATE_COINS, UPDATE_VIBRATION } from '../actions/user';

const initialState: User = {
  jenny: 10,
  hightScore: null,
  vibration: true,
};

export default (state = initialState, action: any): User => {
  switch (action.type) {
    case UPDATE_COINS:
      return {
        ...state,
        jenny: action.jenny,
      };
    case UPDATE_VIBRATION:
      return {
        ...state,
        jenny: action.jenny,
      };
    default:
      return state;
  }
};
