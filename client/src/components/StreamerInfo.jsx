import React from 'react';
import styled from 'styled-components';
import DivRow from './DivRow';

const AvatarImg = styled.img`
  border-radius: 50%;
  padding: 2px 8px;
  width: 34px;
  max-height: 34px;
`;

const Name = styled.h5`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-left: 2px;
`;

function StreamerInfo({ avatar, click }) {
  return (
    <DivRow onClick={click}>
      <Div>
        <AvatarImg src={avatar} alt="My Avatar" />
      </Div>
      <Div>
        <Name>
          Madoblasto
        </Name>
      </Div>
    </DivRow>
  );
}

export default StreamerInfo;
