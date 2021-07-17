import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid #e4e4e4;
  display: flex;
  margin: 12px;
  border-radius: 4px;
  flex-direction: column;
  align-content: center;

  &:hover {
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
  }
`;

const Photo = styled.div`
  img {
    width: 80%;
    border-radius: 50%;
    margin: auto;
    display: block;
    padding-top: 10px;
  }
`;

const Name = styled.div`
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  margin: 18px 0;
`;

function HeroeCards({ data, focus }) {
  return (
    <Link to={`/heroes/${data.id}`} style={{ textDecoration: 'none' }}>
      <Card id={data.id} style={{ border: focus === data.id ? '1px solid #2d2d2d' : '1px solid #e4e4e4' }}>
        <Photo id={data.id}>
          <img src={data.image} alt="" id={data.id}></img>
        </Photo>
        <Name id={data.id}>{data.name}</Name>
      </Card>
    </Link>
  );
}

export default HeroeCards;
