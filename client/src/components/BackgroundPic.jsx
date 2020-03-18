/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BackImg = styled.img`
  width: 100%;
  max-height: 400px;
  padding: 0:
`;

const Div = styled.div`
  padding-bottom: 0;
`;

function BackgroundPic({ pickUrl }) {
  return (
    <Div>
      <BackImg src={pickUrl} alt="my background" />
    </Div>
  );
}

export default BackgroundPic;
