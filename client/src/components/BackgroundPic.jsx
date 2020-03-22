import styled from 'styled-components';

const BackgroundPic = styled.div`
  max-height: 400px;
  padding: 0px;
  margin: 0px;
  background-repeat: no-repeat;
  background-color: black;
  background-size: 100%;
  background-image: ${(props) => props.imgUrl};
`;

export default BackgroundPic;
