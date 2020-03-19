import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-between;
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   border-radius: 5px;
//   height: 30px;
//   justify-content: space-around;
//   color: white;
//   width: 80px;
//   background-color: #8643eb;
  
//   &:hover {
//     background-color: #772ce8;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  justify-content: ${(props) => (props.small ? 'center' : 'space-around')};
  color: white;
  width: ${(props) => (props.small ? '35px' : '80px')};
  margin-right: ${(props) => (props.small ? '5px' : '0px')};
  background-color: ${(props) => (props.small ? '#dcdce0' : '#8643eb')};
  
  &:hover {
    background-color: ${(props) => (props.small ? '#cc0404' : '#772ce8')};
  }
`;

const ContainerS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 5px;
  height: 30px;
  width: 35px;
  background-color: #dcdce0;

  &:hover {
    background-color: #dcdce0;
  }
`;

const Heart = styled.img`
  padding: 3px 8px 3px 10px;
  width: 16px;
  height: auto;
`;

const BlackHeart = styled.img`
  width: 22px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/blackHeart.png");
`;

const Notification = styled.img`
  width: 16px;
  height: auto;
  content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/black_notification.png");
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
    this.state = { growHeart: false, subscribed: false, breakHeart: false, mute: false };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  mouseEnter(e) {
    const { box } = e.target.dataset;
    if (box === 'white') {
      this.setState({ growHeart: true });
    }
    if (box === 'black') {
      this.setState({ breakHeart: true });
    }
    if (box === 'notification') {
      this.setState({ mute: true });
    }
  }

  mouseLeave(e) {
    const { box } = e.target.dataset;
    if (box === 'white') {
      this.setState({ growHeart: false });
    }
    if (box === 'black') {
      this.setState({ breakHeart: false });
    }
    if (box === 'notification') {
      this.setState({ mute: false });
    }
  }

  handleClick(e) {
    // const { box } = e.target.dataset;
    // document.getElementById(id).style.width = '35px';
    const { subscribed, breakHeart } = this.state;
    this.setState({ subscribed: !subscribed, breakHeart: false });
  }

  render() {
    // const { click } = this.props;
    const { growHeart, breakHeart, mute, subscribed } = this.state;
    const bigUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteHeart.png")';
    const smallUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/thickHeart.png")';
    const blackHeart = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/blackHeart.png")';
    const brokenHeart = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/broken_heart.png")';
    const notifications = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/black_notification.png")';
    const mutedNotifications = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/muteNotification.png")';

    return (
      <Wrapper>
        {!subscribed
          ? (
            <Container
              data-box="white"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.handleClick}
              style={{ transition: 'width 800ms' }}
            >
              {growHeart ? <Heart data-box="white" style={{ transition: '300ms', transform: 'scale(1.2)', content: bigUrl }} />
                : <Heart data-box="white" style={{ transition: '400ms', transform: 'scale(1)', content: smallUrl }} />}
              <Word>
                Follow
              </Word>
            </Container>
          ) : (
            <Container
              style={{ transition: 'width 800ms' }}
              data-box="black"
              small
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.handleClick}
            >
              {breakHeart ? <BlackHeart style={{ transition: '300ms', transform: 'scale(1.1)', content: brokenHeart }} />
                : <BlackHeart style={{ transition: '400ms', transform: 'scale(1)', content: blackHeart }} />}
            </Container>
          )}

        {subscribed
          ? (
            <ContainerS
              data-box="notification"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.handleClick}
            >
              {mute ? <Notification style={{ transition: '300ms', transform: 'scale(1.1)', content: mutedNotifications }} />
                : <Notification style={{ transition: '400ms', transform: 'scale(1)', content: notifications }} />}
            </ContainerS>
          ) : false}
      </Wrapper>
    );
  }
}

export default Follow;
