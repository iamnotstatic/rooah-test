import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import Home from './components/Home';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="container">
      <Home />
    </div>
  );
};

export default App;
