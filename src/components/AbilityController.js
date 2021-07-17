import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Text = styled.div`
  width: 60px;
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  margin: 6px 0;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  width: 24px;
  border-radius: 4px;
  outline: none;
  background: #fff;
  border: solid #979797 0.5px;
  font-size: 14px;

  &:hover {
    background: #2d2d2d;
    color: #fff;
  }
`;

const QuantityDisableButton = styled(QuantityButton)`
  background: #dadada;
  color: #9a9a9a;
  border: #cecece solid 0.5px;
  cursor: not-allowed;
  &:hover {
    background: #dadada;
    color: #9a9a9a;
  }
`;

function AbilityController({ abilityData, set, total }) {
  const fouceAbility = abilityData[0];
  const heroabilityDataState = abilityData[1];
  const obj = total.obj;

  const [abilityDataState, setabilityDataStateState] = useState(heroabilityDataState);
  const [incrementState, setIncrementState] = useState(false);

  useEffect(() => {
    setabilityDataStateState(heroabilityDataState);
  }, [heroabilityDataState]);

  function HandleAbiltyData(abilityCount, lastAbilityCount) {
    setabilityDataStateState(abilityCount);
    const data = { obj: { ...obj, [fouceAbility]: abilityCount }, last: lastAbilityCount };
    set(data);
  }

  function decrementHandler() {
    if (abilityDataState !== 0) {
      HandleAbiltyData(abilityDataState - 1, total.last + 1);
    }
  }

  function incrementHandler() {
    if (total.last === 0) {
      setIncrementState(true);
    } else {
      HandleAbiltyData(abilityDataState + 1, total.last - 1);
      setIncrementState(false);
    }
  }

  useEffect(() => {
    if (total && total.last === 0) {
      setIncrementState(true);
    } else {
      setIncrementState(false);
    }
  }, [abilityDataState, total]);

  return (
    <QuantityBox>
      <Text>{fouceAbility}</Text>
      {abilityDataState !== 0 ? (
        <QuantityButton onClick={decrementHandler} id="decrement">
          -
        </QuantityButton>
      ) : (
        <QuantityDisableButton>-</QuantityDisableButton>
      )}
      <Text>{abilityDataState}</Text>
      {!incrementState ? (
        <QuantityButton onClick={incrementHandler} id="increment">
          +
        </QuantityButton>
      ) : (
        <QuantityDisableButton>+</QuantityDisableButton>
      )}
    </QuantityBox>
  );
}

export default AbilityController;
