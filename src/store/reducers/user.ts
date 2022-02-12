import { User } from '@/types/user';
import { UPDATE_JENNY, UPDATE_HIGHT_SCORE } from '../actions/user';

const initialState: User = {
  jenny: 2,
  hightScore: null,
};

export default (state = initialState, action: any): User => {
  switch (action.type) {
    case UPDATE_JENNY:
      return {
        ...state,
        jenny: action.jenny,
      };
    case UPDATE_HIGHT_SCORE:
      return {
        ...state,
        hightScore: action.hightScore,
      };
    default:
      return state;
  }
};
