export const inputPrivateKey = (message) => {
    return(dispatch, getState) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
        
        }).then(() =>{
            dispatch({ type:'VAULT_UNLOCKED', message});
        }).catch((err) =>{
            dispatch({ type:'VAULT_UNLOCK_ERROR', err});
        })
    }
};