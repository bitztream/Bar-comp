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
  width: 16px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/thickHeart.png");
`;


const Word = styled.h5`
  padding: 4px 10px 4px 0;
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
    const bigUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteHeart.png")';
    const smallUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/thickHeart.png")';

    return (
      <Container onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {swapHeart ? <SmallHeart style={{ transition: '300ms', transform: 'scale(1.2)', content: bigUrl }} />
          : <SmallHeart style={{ transition: '300ms', transform: 'scale(1)', content: smallUrl }} />}
        <Word>
          Follow
        </Word>
      </Container>
    );
  }
}

export default Follow;
