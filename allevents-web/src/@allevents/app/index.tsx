import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
// import LandingPage from '@app/landing-page';
// import BookEvent from '@app/book-event';
import ScrollToTop from '@app/@allevents/utils/scrollToTop';
import AuthPage from '@app/auth';
import ExploreEventsPage from '@app/event/explore-events';
import Theme from '@pluralsight/ps-design-system-theme';
import AuthProvider from '@app/auth/provider/auth-provider';
import LandingPage from '@app/landing-page';
import CreateEvent from '@app/event/create-event';

const AllEvents = () => {
  return (
    <Theme name={Theme.names.light}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Switch>
            <Route path={'/auth'} component={AuthPage} />
            {/* <Route exact path={'/event/book'} component={BookEvent} />*/}
            <Route
              exact
              path={'/event/explore'}
              component={ExploreEventsPage}
            />
            <Route exact path={'/event/create'} component={CreateEvent} />
            <Route exact path={'/'} component={LandingPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </Theme>
  );
};

export default AllEvents;
