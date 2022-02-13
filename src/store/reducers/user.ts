import { User } from '@/types/user';
import { UPDATE_JENNY, UPDATE_HIGHT_SCORE, INIT_USER } from '../actions/user';

const initialState: User = {
  jenny: null,
  hightScore: null,
};

export default (state = initialState, action: any): User => {
  switch (action.type) {
    case INIT_USER:
      return {
        jenny: 2,
        hightScore: null,
      };
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
