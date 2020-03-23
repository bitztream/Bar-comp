import styled from 'styled-components';

const NavButton = styled.h5`
  font-family: 'Roboto', sans-serif;
  padding-bottom: 8px;
  font-size: 14px;
  margin: 0 10px;
  border-bottom: ${(props) => (props.selected ? 'solid 2px #8643eb' : 'solid 2px white')};
  color: ${(props) => (props.selected ? '#8643eb' : 'black')};
  transition: border-bottom 500ms;
  &:hover {
    color: #8643eb;
  }
`;

export default NavButton;
