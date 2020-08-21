import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';

// Components
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Workshop from './pages/components/Workshop';
import About from './pages/components/About';
import Vault from './pages/components/Vault';
import Footer from './shared/components/Navigation/Footer';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <MainNavigation />

          <Switch>
            <Route path='/' exact>
              <Workshop />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/vault'>
              <Vault />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
