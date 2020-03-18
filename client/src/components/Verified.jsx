import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 14px;
  height: auto;
`;

function Verified() {
  return <Img src="https://bitztreambar.s3-us-west-1.amazonaws.com/verified.png" alt="User is verified" />;
}

export default Verified;
