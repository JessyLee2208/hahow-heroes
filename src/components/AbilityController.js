import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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

function AbilityController({ data, set, total }) {
  const { id } = useParams();
  const [abilityData, setAbilityData] = useState(data[1]);
  const [decrementState, setDecrementState] = useState(false);
  const [incrementState, setIncrementState] = useState(false);

  const fouceAbility = data[0];
  const obj = total.obj;

  useEffect(() => {
    setAbilityData(data[1]);
  }, [data]);

  useEffect(() => {
    if (abilityData === 0) {
      setDecrementState(true);
    } else {
      setDecrementState(false);
    }

    if (total && total.last === 0) {
      setIncrementState(true);
    } else {
      setIncrementState(false);
    }
  }, [abilityData, total]);

  function decrementHandler() {
    const fouceAbility = data[0];

    if (abilityData === 0) {
      setDecrementState(true);
    } else {
      setAbilityData(abilityData - 1);
      setDecrementState(false);
      const a = { obj: { ...obj, [fouceAbility]: abilityData - 1 }, last: total.last + 1 };
      set(a);
    }
  }
  function incrementHandler() {
    if (total.last === 0) {
      setIncrementState(true);
      console.log('increment disable');
    } else {
      setAbilityData(abilityData + 1);
      setIncrementState(false);
      const a = { obj: { ...obj, [fouceAbility]: abilityData + 1 }, last: total.last - 1 };
      set(a);
    }
  }

  if (data) {
    return (
      <QuantityBox>
        <Text>{data[0]}</Text>
        {abilityData !== 0 ? (
          <QuantityButton onClick={decrementHandler} id="decrement">
            -
          </QuantityButton>
        ) : (
          <QuantityDisableButton>-</QuantityDisableButton>
        )}
        <Text>{abilityData}</Text>
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

  return <div></div>;
}

export default AbilityController;
