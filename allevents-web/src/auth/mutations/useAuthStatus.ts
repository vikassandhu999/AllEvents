import {useMutation} from "react-query";
import {GetAuthStatusProps} from "auth/http/auth/types";
import authApi from "auth/http/auth";

const useAuthStatus = (onSuccess : Function,onError : Function) => {
    return useMutation(async (props : GetAuthStatusProps)=>{
        const result = await authApi.getAuthStatus(props);
        console.log(result);
        if(result.isError) {
            throw result.getError().response.data.error;
        }
        return result.getValue();
    },{
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (error) => {
            onError(error);
        },
    });
}

export default useAuthStatus;