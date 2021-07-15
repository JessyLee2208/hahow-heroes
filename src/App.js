import HeroeCards from './HeroeCards';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  margin: auto;
  border-radius: 4px;
  flex-direction: row;
  align-content: center;
`;
const AppBox = styled.div`
  display: flex;
`;

function App() {
  const [heroes, setHeroes] = useState([[]]);

  useEffect(() => {
    const host_name = `https://hahow-recruit.herokuapp.com/heroes`;
    async function API() {
      fetch(`${host_name}`).then(async (res) => {
        const heroesData = await res.json();
        // console.log(heroesData);
        setHeroes(heroesData);
      });
    }
    API();
  }, []);

  return (
    <AppBox>
      <CardList>
        {heroes.map((heroe) => (
          <HeroeCards data={heroe} key={heroe.id} />
        ))}
      </CardList>
    </AppBox>
  );
}

export default App;
