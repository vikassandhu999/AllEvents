import React, { useEffect } from 'react';
import Header from '@app/x-shared/header';
import { Container } from '@material-ui/core';
import SignupLoginForm from '@app/auth/signup-login-form';
import SignupForm from '@app/auth/signup-form';
import LoginForm from '@app/auth/login-form';
import { Route, useHistory } from 'react-router';
import { useAuth } from '@app/auth/provider/auth-provider';

const AuthPage = () => {
  const { isAuthenticated, isVerifyingAuth } = useAuth();

  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated && !isVerifyingAuth) {
      history.push('/');
    }
  }, [isAuthenticated, isVerifyingAuth]);

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Route exact path={'/auth'} component={SignupLoginForm} />
          <Route exact path={'/auth/sign-up'} component={SignupForm} />
          <Route exact path={'/auth/login'} component={LoginForm} />
        </div>
      </Container>
    </>
  );
};

export default AuthPage;
