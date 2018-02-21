// API
import UsuarioApi from './api';

import { API } from '../../constants/api';

//Hace parte de la arquitectura redux

// Actions
const USUARIOS_LIST = 'USUARIOS_LIST';
const POST_USUARIO = 'POST_USUARIO';

export function loadUsuarios() {
    return {
        type: USUARIOS_LIST,
        payload: UsuarioApi.getAllUsers()
      };
}

export function postUsuario(usuario) {
    return {
        type: POST_USUARIO,
        payload: UsuarioApi.postUsers(usuario)
      };
}


