import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/Home/Home';
import CatFactsPage from 'pages/CatFacts/CatFacts';

const App: React.FC = () => {
  useEffect(() => {
    console.log('test');
  }, []);

  return <React.Fragment>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/cats" component={CatFactsPage}></Route>
        </Switch>
      </Layout>
    </Router>
  </React.Fragment>;
};

export default App;
