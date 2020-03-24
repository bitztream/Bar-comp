import styled from 'styled-components';

const DropMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 42px;
  left: 200px;
  z-index: 4;
  background-color: #ededed;
  width: 120px;  
  border-radius: 8px;
  div {
    display: flex;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    width: 90px;
    h5 {
      border: none;
      padding: 6px;
      font-size: 13px;
      margin: 0px;
      &:hover {}
    }  
    &:hover {
      background-color: #772ce8;
      h5 {
        color: white;
      }
    }
  }
`;

export default DropMenu;
