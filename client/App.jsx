import React, { useState, useEffect } from 'react';
import Marquee from './sections/Marquee/Marquee.jsx';
import HostInfo from './sections/Host-Info/components/HostInfo.jsx';
import Reviews from './sections/Reviews/Reviews.jsx';
import RelatedInfo from './sections/Related-Info/RelatedInfo.jsx';

const App = () => (
  <div>
    <Marquee />
    <HostInfo />
    <Reviews />
    <RelatedInfo />
  </div>
);


export default App;
