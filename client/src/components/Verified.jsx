import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 18px;
  height: auto;
`;

function Verified(props) {
  const { enter, leave } = props;
  return <Img data-status="verified" onMouseEnter={enter} onMouseLeave={leave} src="https://bitztreambar.s3-us-west-1.amazonaws.com/verified.png" alt="User is verified" />;
}

export default Verified;
