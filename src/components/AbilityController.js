import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Text = styled.div`
  width: 60px;
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  margin: 6px 14px;
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
  const currentAbility = abilityData[0];
  const currentAbilityQuantity = abilityData[1];
  const obj = total.obj;

  const [abilityQuantityCount, setAbilityQuantityCount] = useState(currentAbilityQuantity);
  const [incrementState, setIncrementState] = useState(false);

  function HandleAbiltyData(abilityCount, lastAbilityCount) {
    setAbilityQuantityCount(abilityCount);
    const data = { obj: { ...obj, [currentAbility]: abilityCount }, last: lastAbilityCount };
    set(data);
  }

  function decrementHandler() {
    if (abilityQuantityCount !== 0) {
      HandleAbiltyData(abilityQuantityCount - 1, total.last + 1);
    }
  }

  function incrementHandler() {
    if (total.last === 0) {
      setIncrementState(true);
    } else {
      HandleAbiltyData(abilityQuantityCount + 1, total.last - 1);
      setIncrementState(false);
    }
  }

  useEffect(() => {
    setAbilityQuantityCount(currentAbilityQuantity);
  }, [currentAbilityQuantity]);

  useEffect(() => {
    if (total && total.last === 0) {
      setIncrementState(true);
    } else {
      setIncrementState(false);
    }
  }, [abilityQuantityCount, total]);

  return (
    <QuantityBox>
      <Text>{currentAbility.toUpperCase()}</Text>
      {!incrementState ? (
        <QuantityButton onClick={incrementHandler} id="increment">
          +
        </QuantityButton>
      ) : (
        <QuantityDisableButton>+</QuantityDisableButton>
      )}
      <Text>{abilityQuantityCount}</Text>
      {abilityQuantityCount !== 0 ? (
        <QuantityButton onClick={decrementHandler} id="decrement">
          -
        </QuantityButton>
      ) : (
        <QuantityDisableButton>-</QuantityDisableButton>
      )}
    </QuantityBox>
  );
}

export default AbilityController;
