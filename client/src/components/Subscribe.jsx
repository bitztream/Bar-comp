import React from 'react';
import styled from 'styled-components';

const blackStarUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/black_star.png")';
const whiteStarUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteStar.png")';
const blackArrowUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/down.png")';
const whiteArrowUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteDownArrow.png")';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  justify-items: space-evenly;
  color: ${(props) => (props.sus ? 'white' : 'black')};;
  width: 120px;
  background-color: ${(props) => (props.sus ? '#8643eb' : '#dcdce0')};

  &:hover {
    background-color: ${(props) => (props.sus ? '#772ce8' : '#ceced4')};
  }
`;

const Down = styled.img`
  margin-right: ${(props) => (props.sus ? '2px' : '4px')}
  padding: 3px 10px 3px ${(props) => (props.sus ? '10px' : '2px')};
  margin-left: ${(props) => (props.sus ? '4px' : '0px')};
  width: ${(props) => (props.sus ? '13px' : '22px')};
  height: auto;
  content: ${(props) => (props.sus ? whiteArrowUrl : blackArrowUrl)};
`;

const Star = styled.img`
  padding: 3px 8px 3px 8px;
  width: 18px;
  height: auto;
  content: ${(props) => (props.sus ? whiteStarUrl : blackStarUrl)};
`;

const Word = styled.h5`
  padding: 4px 2px 4px 0;
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: 700;
`;

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ modal: true });
  }

  render() {
    const { is } = this.props;
    return (
      <Container sus={is} onClick={this.handleClick}>
        <Star sus={is} />
        <Word>Subscribe</Word>
        <Down sus={is} />
      </Container>
    );
  }
}

export default Subscribe;
