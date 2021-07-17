import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import AbilityController from './AbilityController';
import useHeroDataCheck from '../hook/useHeroDataCheck';

const Name = styled.div`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  margin: 18px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 21px;
`;

const CheckButton = styled.button`
  border: none;
  outline: none;
  height: 40px;

  background: #2d2d2d;
  color: #fff;

  padding: 0.1em 1.2em;
  font-size: 15px;
  font-weight: bold;
  line-height: 36px;
  border-radius: 4px;

  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    background: #040404;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonDisable = styled(CheckButton)`
  background: #d6d6d6;
  color: #a5a5a5;
  &:focus {
    background: #d6d6d6;
    color: #a5a5a5;
  }
`;

function HeroProfile() {
  const { id } = useParams();
  const [ability, setAbility] = useState([]);
  const [abilityTotal, setAbilityTotal] = useState({});

  const host_name = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;

  function setAbilityTotalData(abilitys) {
    const data = {
      obj: abilitys,
      last: 0
    };
    setAbilityTotal(data);
  }

  function upLoadData() {
    fetch(`${host_name}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(abilityTotal.obj)
    }).then(async (res) => {
      // console.log(res);
      // if()
    });
  }

  function renderController() {
    return Object.entries(ability).map((data, index) => (
      <AbilityController abilityData={data} total={abilityTotal} set={setAbilityTotal} key={index}></AbilityController>
    ));
  }

  useHeroDataCheck(host_name, setAbilityTotalData);

  useEffect(() => {
    setAbility(abilityTotal.obj);
  }, [abilityTotal]);

  return ability ? (
    <Box>
      <div>{renderController()}</div>
      <CheckBox>
        <Name>剩餘點數：{abilityTotal.last}</Name>
        {abilityTotal.last !== 0 ? (
          <ButtonDisable>儲存</ButtonDisable>
        ) : (
          <CheckButton onClick={upLoadData}>儲存</CheckButton>
        )}
      </CheckBox>
    </Box>
  ) : null;
}

export default HeroProfile;
