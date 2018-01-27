// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers
import library from '../containers/Library/reducer';
import usuario from '../containers/Usuarios/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  library,
  usuario
});

export default rootReducer;
