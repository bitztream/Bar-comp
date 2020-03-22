/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import DivCol from './DivCol';
import DivRow from './DivRow';
import data from './fakeData';
import StreamerInfo from './StreamerInfo';
import Verified from './Verified';
import Follow from './Follow';
import Subscribe from './Subscribe';

const Bubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 4;
  left: ${(props) => (props.live ? '240px' : '195px')};
  background-color: black;
  color: white;
  width: ${(props) => (props.live ? '58px' : '86px')};
  height: 20px;
  border-radius: 4px;
  font-size: 12px;
  font-family: arial;
  font-weight: 600;
`;

const BackgroundPic = styled.img`
  max-height: '300px'
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  height: 50px;
  padding-top: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.nav ? 'space-evenly' : 'center')};
  padding-left: ${(props) => (props.nav ? '40px' : '10px')};
  padding-right: ${(props) => (props.last ? '10px' : '0px')};
`;

const Live = styled.div`
  height: 16px;
  font-family: "Open Sans";
  font-weight: 700;
  background-color: red;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  padding: 0 5px 2px 4px;
`;

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

const dataSample = data;

class MainBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleStreamerClick = this.handleStreamerClick.bind(this);
    this.subscribeClick = this.subscribeClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleBubbleIn = this.handleBubbleIn.bind(this);
    this.handleBubbleOut = this.handleBubbleOut.bind(this);
    this.state = {
      isLive: true,
      streamerIsClicked: false,
      isVerified: true,
      isSubscribed: false,
      // subscriptionEmotes: [],
      // customEmotes: [],
      name: '',
      avatarPicUrl: '',
      backgroundPicUrl: '',
      // customEmotesCount: 0,
      page: 'home',
      bubbleLive: 0,
      bubbleVerified: 0,
    };
  }

  componentDidMount() {
    this.setState(dataSample);
  }

  handleStreamerClick() {
    const current = this.state.streamerIsClicked;
    this.setState({ streamerIsClicked: !current });
  }

  handleNavClick(e) {
    const { btnname } = e.target.dataset;
    this.setState({ page: btnname });
  }

  handleBubbleIn(e) {
    const { status } = e.target.dataset;
    const rect = e.target.getBoundingClientRect();
    if (status === 'live') {
      this.setState({ bubbleLive: rect.x });
    }
    if (status === 'verified') {
      this.setState({ bubbleVerified: rect.x });
    }
  }

  handleBubbleOut(e) {
    const { status } = e.target.dataset;
    if (status === 'live') {
      this.setState({ bubbleLive: 0 });
    }
    if (status === 'verified') {
      this.setState({ bubbleVerified: 0 });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  subscribeClick() {
    // this.setState({ isSubscribed: true });
  }

  render() {
    const {
      name, backgroundPicUrl, avatarPicUrl, isVerified, isLive, streamerIsClicked, isSubscribed,
      page, bubbleVerified, bubbleLive,
    } = this.state;
    const realUrl = `url(${backgroundPicUrl})`;

    return (
      <DivCol style={{ backgroundColor: 'black' }}>
        {!streamerIsClicked
          ? (
            <BackgroundPic style={{
              height: '0px', width: '50%', transition: 'height 600ms, width 700ms', content: realUrl,
            }}
            />
          )
          : (
            <BackgroundPic style={{
              height: '300px', width: '100%', transition: 'height 600ms, width 600ms', content: realUrl,
            }}
            />
          )}
        <NavDiv>

          <DivRow onClick={this.handleStreamerClick}>
            <StreamerInfo name={name} avatar={avatarPicUrl} />

            <Div>
              {isVerified ? <Verified enter={this.handleBubbleIn} leave={this.handleBubbleOut} /> : false}
              {bubbleVerified ? <Bubble style={{ left: (bubbleVerified + 30) }}>Verified User</Bubble> : false}
            </Div>

            <Div>
              {isLive ? <Live data-status="live" onMouseEnter={this.handleBubbleIn} onMouseLeave={this.handleBubbleOut}>LIVE</Live> : false}
              {bubbleLive ? <Bubble style={{ left: (bubbleLive + 38) }} live>Live Now</Bubble> : false}
            </Div>

          </DivRow>

          <Div nav>
            <NavButton data-btnname="home" selected={page === 'home'} onClick={this.handleNavClick}>Home</NavButton>
            <NavButton data-btnname="videos" selected={page === 'videos'} onClick={this.handleNavClick}>Videos</NavButton>
            <NavButton data-btnname="clips" selected={page === 'clips'} onClick={this.handleNavClick}>Clips</NavButton>
            <NavButton data-btnname="followers" selected={page === 'followers'} onClick={this.handleNavClick}>Followers</NavButton>
          </Div>

          <Div nav last>
            <Div>
              <Follow click={this.subscribeClick} />
            </Div>

            <Div>
              {isSubscribed ? <Subscribe is /> : <Subscribe />}
            </Div>

          </Div>
        </NavDiv>
      </DivCol>
    );
  }
}

export default MainBar;
