export const toggleLoginAction = {
    toggleLogin,
}

function toggleLogin(data){
    return (dispatch)=>{
        dispatch({type: 'TOGGLE_LOGIN', payload: data});
    }
}