// Utils
import { getNewState } from '../../lib/utils/frontend';

const initialState = {
  usuarios: []
};

export default function usuarioReducer(state = initialState, action) {
  switch(action.type) {
    case 'USUARIOS_LIST_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        usuarios: response
      });
    }
    case 'POST_USUARIO_SUCCESS': {
      const { payload: { response = [] }} = action;
    }
    default:
      return state;
  }
}
