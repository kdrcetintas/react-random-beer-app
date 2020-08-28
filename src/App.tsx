import React from 'react';
import {
  Switch, Route, BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/Header';
import BrandPage from './views/BrandPage';
import DetailPage from './views/DetailPage';
import AboutPage from './views/AboutPage';

function App() {
  return (
    <div className="mx-auto">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BrandPage />
          </Route>
          <Route path="/brewery/:id">
            <DetailPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;