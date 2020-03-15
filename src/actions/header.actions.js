export const toggleThemeAction = {
    toggleTheme,
}

function toggleTheme(data){
    return (dispatch)=>{
        dispatch({type: 'TOGGLE_THEME', payload: !data});
    }
}