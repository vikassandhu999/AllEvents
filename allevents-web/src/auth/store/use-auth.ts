import create from 'zustand'

interface IAuthUser {
    email : string;
    firstName : string;
    lastName : string;
    userId : string;
}

type AuthStore = {
    isAuthenticated : boolean;
    isVerifyingAuth : boolean;
    currentUser ?: IAuthUser;
    setAuth : (isAuthenticated : boolean,currentUser ?: IAuthUser)=>void,
    setAuthenticating : (verifying : boolean)=>void
}

const useAuth = create<AuthStore>((set)=>({
    isAuthenticated : false,
    isVerifyingAuth : false,
    currentUser : undefined,
    setAuth (isAuthenticated,currentUser) {
        set(state => ({
            ...state,
            isAuthenticated,
            currentUser : currentUser??undefined
        }))
    },
    setAuthenticating(verifying){
        set(state => ({
            ...state,
            isVerifyingAuth : verifying
        }))
    }
}));

export default useAuth;