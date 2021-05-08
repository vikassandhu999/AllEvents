import React from 'react';
import Hero from '@app/landing-page/hero';
import Header from '@app/x-shared/header';
import RecentEvents from '@app/landing-page/recent-events';
import Footer from '@app/x-shared/footer';

const LandingPage = () => {
  return (
    <div className="homepage">
      <Header />
      <RecentEvents />
      <Footer />
    </div>
  );
};

export default LandingPage;
