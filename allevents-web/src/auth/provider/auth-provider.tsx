import * as React from 'react';
import authApi from '@app/auth/http/auth';
import hasResponseData from '@app/@allevents/utils/has-response-data';
import getErrorResponseData from '@app/@allevents/utils/get-error-response-data';
import { useMemo } from 'react';

type AuthContextType = {
  isVerifyingAuth: boolean;
  verifyAuth: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  error?: string;
  user?: any;
  isAuthFailed: boolean;
};

// @ts-ignore
const AuthContext = React.createContext<AuthContextType>();
AuthContext.displayName = 'AuthContext';

type AuthProviderProps = {
  loading?: React.ReactNode;
  [x: string]: any;
};

type AuthState = {
  isAuthenticated: boolean;
  isVerifyingAuth: boolean;
  isAuthFailed: boolean;
  error?: string;
  user?: any;
};

const initialAuthState = {
  isAuthenticated: false,
  isVerifyingAuth: true,
  isAuthFailed: false,
  error: undefined,
  user: undefined,
};

export default function AuthProvider({
  loading,
  failed,
  ...otherProps
}: AuthProviderProps): JSX.Element {
  const [state, setState] = React.useState<AuthState>(initialAuthState);

  async function handleApiError(error: any) {
    if (hasResponseData(error)) {
      const { message, errorCode } = getErrorResponseData(error);
      if (errorCode === 'missing-auth-token-or-user-info') {
        setState({
          error: message,
          isAuthenticated: false,
          isVerifyingAuth: false,
          isAuthFailed: true,
          user: undefined,
        });
      }
    } else {
      setState({ error: 'An unknown error has been occurred', ...state });
    }
  }

  async function verifyAuthCookies() {
    const response = await authApi.verifyAuth();
    if (response.isError) {
      return handleApiError(response.getError());
    }
    const value = response.getValue();
    setState({
      isAuthenticated: true,
      isVerifyingAuth: false,
      isAuthFailed: false,
      user: value.data,
      error: undefined,
    });
  }

  async function verifyAuth() {
    await setState({
      isAuthenticated: false,
      isVerifyingAuth: true,
      isAuthFailed: false,
      error: undefined,
      user: undefined,
    });
    return verifyAuthCookies();
  }

  async function logout() {
    await setState({
      isAuthenticated: false,
      isVerifyingAuth: true,
      isAuthFailed: false,
      error: undefined,
      user: undefined,
    });
  }

  React.useEffect(() => {
    verifyAuthCookies();
  }, []);

  const value: AuthContextType = useMemo(
    () => ({ ...state, verifyAuth, logout }),
    [state, verifyAuth, logout],
  );

  return <AuthContext.Provider value={value} {...otherProps} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
