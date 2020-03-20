/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import DivCol from './DivCol';
import DivRow from './DivRow';
import data from './fakeData';
import BackgroundPic from './BackgroundPic';
import StreamerInfo from './StreamerInfo';
import Verified from './Verified';
import Follow from './Follow';
import Subscribe from './Subscribe';

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
  padding-right: ${(props) => (props.end ? '10px' : '0px')};

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
  border-bottom: ${props => props.selected ? 'solid 2px #8643eb' : 'solid 1px white'};
  color: ${props => props.selected ? '#8643eb' : 'black'};
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
    this.state = {
      isLive: true,
      streamerIsClicked: false,
      isVerified: true,
      isSubscribed: false,
      subscriptionEmotes: [],
      customEmotes: [],
      name: '',
      avatarPicUrl: '',
      backgroundPicUrl: '',
      customEmotesCount: 0,
      page: 'home',
    };
  }

  componentDidMount() {
    this.setState(dataSample);
  }

  handleStreamerClick() {
    const current = this.state.streamerIsClicked;
    this.setState({ streamerIsClicked: !current });
  }

  subscribeClick() {
    // this.setState({ isSubscribed: true });
  }

  render() {
    const {
      name, backgroundPicUrl, avatarPicUrl, isVerified, isLive, streamerIsClicked, isSubscribed,
    } = this.state;

    return (
      <DivCol>
        {streamerIsClicked ? <BackgroundPic pickUrl={backgroundPicUrl} /> : <div />}
        <NavDiv>
          <DivRow onClick={this.handleStreamerClick}>
            <StreamerInfo name={name} avatar={avatarPicUrl} />
            <Div>
              {isVerified ? <Verified /> : false}
            </Div>
            <Div>
              {isLive ? <Live>LIVE</Live> : false}
            </Div>
          </DivRow>
          <Div nav>
            <NavButton selected>Home</NavButton>
            <NavButton>Videos</NavButton>
            <NavButton>Clips</NavButton>
            <NavButton>Followers</NavButton>
          </Div>
          <Div nav end>
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
