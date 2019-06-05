export const inputPrivateKey = (pk) => {
    return(dispatch, getState) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
        
            dispatch({ type:'VAULT_UNLOCKED', pk});
    }
};