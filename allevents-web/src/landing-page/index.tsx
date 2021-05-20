import React from 'react';
import Header from '@app/x-shared/header';
import RecentEvents from '@app/landing-page/recent-events';

const LandingPage = () => {
  return (
    <div className="homepage">
      <Header />
      <RecentEvents />
    </div>
  );
};

export default LandingPage;
