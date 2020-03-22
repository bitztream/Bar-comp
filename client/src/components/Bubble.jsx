import styled from 'styled-components';

const Bubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 4;
  left: ${(props) => (props.live ? '240px' : '195px')};
  background-color: black;
  color: white;
  width: ${(props) => (props.live ? '58px' : '86px')};
  height: 20px;
  border-radius: 4px;
  font-size: 12px;
  font-family: arial;
  font-weight: 600;
`;

export default Bubble;
