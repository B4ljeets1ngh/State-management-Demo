//import {} from '../helpers/actionConstants';

const initialState = {
    isLoggedIn : false,
}

export function toggleLogin(state = initialState, action){

  switch(action.type){
      case 'TOGGLE_LOGIN': {
            return {
                ...state,
                isLoggedIn : action.payload,
            };
        }
        default :
        return state;
    }
}