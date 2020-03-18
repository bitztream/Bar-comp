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

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 44px;
  padding-top: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.nav ? 'space-evenly' : 'center'};
  padding-left: ${(props) => props.nav ? '40px' : '10px'}

`;

const Live = styled.div`
  height: 14px;
  font-family: "Open Sans";
  font-weight: 700;
  background-color: red;
  border-radius: 3px;
  color: white;
  font-size: 11px;
  padding: 0 4px 2px;
`;

const NavButton = styled.h5`
  font-family: 'Roboto', sans-serif;
  padding-bottom: 10px;
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

  render() {
    return (
      <DivCol>
        {this.state.streamerIsClicked
          ? <BackgroundPic pickUrl={this.state.backgroundPicUrl} /> : <div />}
        <NavDiv>
          <DivRow>
            <StreamerInfo avatar={this.state.avatarPicUrl} click={this.handleStreamerClick} />
            <Div>
              {this.state.isVerified ? <Verified /> : false}
            </Div>
            <Div>
              {this.state.isLive ? <Live>LIVE</Live> : false}
            </Div>
            <Div nav>
              <NavButton selected>Home</NavButton>
              <NavButton>Videos</NavButton>
              <NavButton>Clips</NavButton>
              <NavButton>Followers</NavButton>
            </Div>
            <Div nav>
              <Follow />
            </Div>
          </DivRow>
        </NavDiv>
      </DivCol>
    );
  }
}

export default MainBar;
