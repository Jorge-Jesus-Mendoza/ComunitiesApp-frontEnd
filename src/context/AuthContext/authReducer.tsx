import {AuthState, authInitialState} from '.';
import {registerUserItem, userItem} from '../../interfaces/authInterfaces';

type AuthAction =
  | {type: 'logIn'; payload: userItem}
  | {type: 'sigIn'; payload: userItem}
  | {type: 'logout'};

export default function authReducer(
  state: AuthState,
  action: AuthAction,
): AuthState {
  console.log('action.type', action);
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.name,
        lastName: action.payload.last_name,
        tokenId: action.payload.token,
        identification_card: action.payload.identification_card,
      };
    case 'sigIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.name,
        lastName: action.payload.last_name,
        tokenId: action.payload.token,
        identification_card: action.payload.identification_card,
      };
    case 'logout':
      return {
        ...state,
        ...authInitialState,
      };

    default:
      return state;
  }
}
