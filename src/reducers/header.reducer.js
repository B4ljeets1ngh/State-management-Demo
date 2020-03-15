//import {} from '../helpers/actionConstants';

const initialState = {
    isDark : true,
}

export function toggleTheme(state = initialState, action){
  switch(action.type){

      case 'TOGGLE_THEME': {
            return {
                ...state,
                isDark : action.payload,
            };
        }
        
        default :
        return state;
    }
}