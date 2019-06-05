export const inputPrivateKey = (pk) => {
    return(dispatch, getState) => {
        dispatch({ type:'VAULT_UNLOCKED', pk});
    }
}