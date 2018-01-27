// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch, apiFetch2 } from '../../lib/utils/api';

class UsuarioApi {

    static getAllUsers() {
        return apiFetch(API.USUARIO.USUARIOS);
    }

}

export default UsuarioApi;
