import HeroeCards from './components/HeroeCards';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeroProfile from './components/HeroProfile';

const CardList = styled.div`
  display: flex;
  margin: auto;
  border-radius: 4px;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
`;
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
  const [heroes, setHeroes] = useState([]);
  const [fouce, setFouce] = useState(false);

  // const [fouce, setFouce] = useState();
  // const { id } = useParams();

  useEffect(() => {
    const host_name = `https://hahow-recruit.herokuapp.com/heroes`;
    async function API() {
      fetch(`${host_name}`).then(async (res) => {
        const heroesData = await res.json();
        setHeroes(heroesData);
      });
    }
    API();
  }, []);

  function handler(e) {
    console.log(e.target.id);
    setFouce(e.target.id);
  }

  return (
    <AppBox>
      <Router>
        <CardList onClick={handler}>
          {heroes.map((heroe) => (
            <HeroeCards data={heroe} key={heroe.id} fouce={fouce} />
          ))}
        </CardList>
        <Switch>
          {/* <Route exact path="/heroes"></Route> */}
          <Route path="/heroes/:id">
            <HeroProfile />
          </Route>
        </Switch>
      </Router>
    </AppBox>
  );
}

export default App;
