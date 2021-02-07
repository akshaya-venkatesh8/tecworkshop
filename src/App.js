import React from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Routes from './routes/routes';

library.add(faFacebookF, faInstagram, faYoutube, faLinkedin, faTwitter);

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
