import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  justify-items: space around;
  color: white;
  width: 80px;
  background-color: #8643eb;

  &:hover {
    background-color: #772ce8;
    #big {
      transition: transform 300ms;
      transform: scale(1.3); 
    }
  }
`;


const SmallHeart = styled.img`
  padding: 3px 8px 3px 10px;
  width: 14px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/thickHeart.png");
`;

const BigHeart = styled.img`
  padding: 3px 8px 3px 10px;
  width: 14px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteHeart.png");
  transition: transform 300ms;
`;


const Word = styled.h5`
  padding: 4px 8px 4px 0;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
`;

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { swapHeart: false };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ swapHeart: true });
  }

  mouseLeave() {
    this.setState({ swapHeart: false });
  }

  render() {
    const { swapHeart } = this.state;

    return (
      <Container onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {swapHeart ? <BigHeart id="big" style={{ transition: '300ms', transform: 'scale(1.3)' }} /> : <BigHeart />}
        <Word>
          Follow
        </Word>
      </Container>
    );
  }
}

export default Follow;
