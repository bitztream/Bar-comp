import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  justify-items: space-evenly;
  color: black;
  width: 120px;
  background-color: #dcdce0;

  &:hover {
    background-color: #ceced4;
  }
`;

const Down = styled.img`
  margin-right: 4px:
  padding: 3px 10px 3px 4px;
  width: 22px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/down.png");
`;

const Star = styled.img`
  padding: 3px 8px 3px 8px;
  width: 18px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/black_star.png");
`;

const Word = styled.h5`
  padding: 4px 4px 4px 0;
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
    return (
      <Container onClick={this.handleClick}>
        <Star />
        <Word>Subscribe</Word>
        <Down />
      </Container>
    );
  }
}

export default Subscribe;
