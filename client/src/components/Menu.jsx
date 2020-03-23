import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
`;

const DivM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;  
  padding-bottom:  8px; 
  margin: 0 10px;
  &:hover {
    div {
      background-color: #8643eb;
    }
  }
`;

const NavDots = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 1px; 
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize() {
    const newWidth = window.innerWidth;
    this.setState({ windowWidth: newWidth });
  }

  render() {
    const { windowWidth } = this.state;
    const { buttonClick, page } = this.props;
    return (
      <NavDiv>
        <NavButton data-btnname="home" selected={page === 'home'} onClick={buttonClick}>Home</NavButton>
        {(windowWidth > 675)
          ? (
            <NavButton data-btnname="videos" selected={page === 'videos'} onClick={buttonClick}>Videos</NavButton>
          ) : false}
        {(windowWidth > 745)
          ? (
            <NavButton data-btnname="clips" selected={page === 'clips'} onClick={buttonClick}>Clips</NavButton>
          ) : false}
        {(windowWidth > 800)
          ? (
            <NavButton data-btnname="followers" selected={page === 'followers'} onClick={buttonClick}>Followers</NavButton>
          ) : false}
        {(windowWidth < 801)
          ? (
            <DivM onClick={this.props.dotsClick}>
              <NavDots />
              <NavDots />
              <NavDots />
            </DivM>
          ) : false}
      </NavDiv>
    );
  }
}

export default Menu;
