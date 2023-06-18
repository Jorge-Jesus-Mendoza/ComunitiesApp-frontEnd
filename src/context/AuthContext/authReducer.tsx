import { AuthState, authInitialState } from '.';

type AuthAction =
  | { type: 'signIn'; }
  | { type: 'logout'; }
  | { type: 'favoriteIcon'; payload: string; }
  | { type: 'changeUserName'; payload: string; };

export default function authReducer(
  state: AuthState,
  action: AuthAction,
): AuthState {
  console.log('action.type', action);
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'favoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        ...authInitialState,
      };
    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
}
