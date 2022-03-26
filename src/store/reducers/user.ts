import { User } from '@/types/user';
import { UPDATE_HIGHT_SCORE, INIT_USER } from '../actions/user';

const initialState: User = {
  hightScore: null,
};

export default (state = initialState, action: any): User => {
  switch (action.type) {
    case INIT_USER:
      return {
        hightScore: null,
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
