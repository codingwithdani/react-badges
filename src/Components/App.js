import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Components/Layout'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId/" component={BadgeDetailsContainer} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;