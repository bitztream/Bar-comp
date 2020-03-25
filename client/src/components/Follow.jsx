import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-between;
  width: 82px;
`;

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

const ContainerS = styled(Container)`
  margin: 0 5px;
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
    this.state = {
      growHeart: false, following: false, breakHeart: false, muteEffect: false, notificationsOn: true,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.notificationClick = this.notificationClick.bind(this);
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
      this.setState({ muteEffect: true });
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
      this.setState({ muteEffect: false });
    }
  }

  handleClick() {
    const { name } = this.props;
    const { following } = this.state;
    if (!following) {
      axios.put(`/streamers/${name}`, { amount: 1 })
        .catch((err) => {
          console.log(err);
        });
    }
    if (following) {
      axios.put(`/streamers/${name}`, { amount: -1 })
        .catch((err) => {
          console.log(err);
        });
    }
    this.setState({ following: !following, breakHeart: false });
  }

  notificationClick() {
    const { notificationsOn } = this.state;
    this.setState({ notificationsOn: !notificationsOn });
  }

  render() {
    const {
      growHeart, breakHeart, muteEffect, following, notificationsOn,
    } = this.state;
    const bigUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteHeart.png")';
    const smallUrl = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/thickHeart.png")';
    const blackHeart = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/blackHeart.png")';
    const brokenHeart = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/broken_heart.png")';
    const notifications = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/black_notification.png")';
    const mutedNotifications = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/muteNotification.png")';
    const hollowNotifications = 'url("https://bitztreambar.s3-us-west-1.amazonaws.com/hollowNotifications.png")';

    return (
      <Wrapper>
        {!following
          ? (
            <Container
              data-box="white"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.handleClick}
              style={{ transition: 'width 800ms' }}
            >
              {growHeart ? <Heart data-box="white" style={{ transition: '400ms', transform: 'scale(1.2)', content: bigUrl }} />
                : <Heart data-box="white" style={{ transition: '450ms', transform: 'scale(1)', content: smallUrl }} />}
              <Word>
                Follow
              </Word>
            </Container>
          ) : (
            <Container
              style={{ transition: 'width 400ms' }}
              data-box="black"
              small
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.handleClick}
            >
              {breakHeart ? <BlackHeart data-box="black" style={{ transition: '440ms', transform: 'scale(1.12)', content: brokenHeart }} />
                : <BlackHeart data-box="black" style={{ transition: '500ms', transform: 'scale(0.95)', content: blackHeart }} />}
            </Container>
          )}

        {following
          ? (
            <ContainerS
              data-box="notification"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.notificationClick}
            >
              {!muteEffect ? <Notification data-box="notification" style={{ transition: '300ms', transform: 'scale(1)', content: (notificationsOn ? notifications : hollowNotifications) }} />
                : <Notification data-box="notification" style={{ transition: '400ms', transform: 'scale(1.3)', content: (notificationsOn ? mutedNotifications : notifications) }} />}
            </ContainerS>
          ) : false}
      </Wrapper>
    );
  }
}

export default Follow;
