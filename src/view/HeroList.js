import React, { useState } from 'react';
import styled from 'styled-components';

import HeroeCards from '../components/HeroeCards';
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
  const [selected, setSelected] = useState(false);
  const host_name = `https://hahow-recruit.herokuapp.com/heroes`;

  const heroes = useHeroDataCheck(host_name);
  function handler(e) {
    setSelected(e.target.id);
  }

  return (
    <>
      <CardList onClick={handler}>
        {heroes.map((hero) => (
          <HeroeCards data={hero} key={hero.id} selected={selected} />
        ))}
      </CardList>
    </>
  );
}

export default HeroList;
