import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HeroProfile from './components/HeroProfile';
import HeroList from './components/HeroList';

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  max-width: 920px;
  width: auto;
  margin: auto;
`;

function App() {
  return (
    <AppBox>
      <Router>
        <HeroList />
        <Switch>
          <Route path="/heroes/:id">
            <HeroProfile />
          </Route>
          <Redirect to="/heroes" />
        </Switch>
      </Router>
    </AppBox>
  );
}

export default App;
