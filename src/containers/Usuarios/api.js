// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch } from '../../lib/utils/api';

class UsuarioApi {

    static getAllUsers() {
        return apiFetch(API.USUARIO.USUARIOS);
    }

    static postUsers(usuario) {

        const options = {
            method : 'POST',
            body:  JSON.stringify(usuario),
            headers : {
                'Content-Type': 'application/json'
            }
        }
        return apiFetch(API.USUARIO.USUARIOS, options);
    }

}

export default UsuarioApi;
