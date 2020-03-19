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

  #big {
    transform: scale(1);
    transition: transform 300ms ease-out;
  }

  &:hover {
    background-color: #772ce8;
    #big {
      transform: scale(1.2);
      transition: transform 300ms ease-out;
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
`;


const Word = styled.h5`
  padding: 4px 8px 4px 0;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 600;
`;

// const transform = {
//   ':hover': {
//     transform: 'scale(1.4)',
//     transition: 'transform 300ms ease-out',
//   },
//   padding: '3px 8px 3px 10px',
//   width: '14px',
//   height: 'auto',
//   content: 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteHeart.png")',
// };

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
        {/* <SmallHeart id="big" /> */}
        <SmallHeart id="big" />
        <Word>
          Follow
        </Word>
      </Container>
    );
  }
}

export default Follow;
