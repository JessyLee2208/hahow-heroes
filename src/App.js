import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import HeroProfile from './view/HeroProfile';
import HeroList from './view/HeroList';
import { Loading } from './components/LottieAnimat';
import useTimer from './hook/useTimer';

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
  const timer = useTimer();
  console.log(timer);

  return (
    <AppBox>
      <Toaster />

      <Router>
        {timer ? <Loading /> : <HeroList />}

        <Switch>
          <Route path="/heroes/:id">{timer ? null : <HeroProfile />}</Route>
          <Redirect to="/heroes" />
        </Switch>
      </Router>
    </AppBox>
  );
}

export default App;
