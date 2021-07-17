import React, { useState } from 'react';
import styled from 'styled-components';

import HeroeCards from './HeroeCards';
import useHeroDataCheck from '../hook/useHeroDataCheck';

const CardList = styled.div`
  display: flex;
  margin: auto;
  border-radius: 4px;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
`;

function HeroList() {
  const [focus, setFocus] = useState(false);
  const host_name = `https://hahow-recruit.herokuapp.com/heroes`;

  const heroes = useHeroDataCheck(host_name);
  function handler(e) {
    setFocus(e.target.id);
  }

  return (
    <CardList onClick={handler}>
      {heroes.map((hero) => (
        <HeroeCards data={hero} key={hero.id} focus={focus} />
      ))}
    </CardList>
  );
}

export default HeroList;
