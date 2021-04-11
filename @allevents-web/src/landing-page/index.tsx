import React from "react";
import Hero from "landing-page/hero";
import Header from "x-shared/header";
import RecentEvents from "landing-page/recent-events";

const LandingPage = () => {
    return (
        <div className="homepage">
          <Header/>
          <Hero/>
          <RecentEvents/>
        </div>
    )
}


export default LandingPage;