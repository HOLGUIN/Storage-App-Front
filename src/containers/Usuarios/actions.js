// API
import UsuarioApi from './api';

import { API } from '../../constants/api';

// Actions
const USUARIOS_LIST = 'USUARIOS_LIST';

export function loadUsuarios() {
    return {
        type: USUARIOS_LIST,
        payload: UsuarioApi.getAllUsers()
      };
}


