/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import DivCol from './DivCol';
import DivRow from './DivRow';
import data from './fakeData';
// import NavDiv from './NavDiv';
import BackgroundPic from './BackgroundPic';
import StreamerInfo from './StreamerInfo';

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 48px;
  padding-top: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10px;
`;

const Live = styled.div`
  font-family: "Open Sans";
  background-color: red;
  border-radius: 15%;
  color: white;
  font-size: 12px;
  padding: 1px 5px;
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
            {/* <Div>
              {this.state.isVerified ? <Verified /> : false}
            </Div> */}
            <Div>
              {this.state.isLive ? <Live>LIVE</Live> : false}
            </Div>
          </DivRow>
        </NavDiv>
      </DivCol>
    );
  }
}

export default MainBar;
