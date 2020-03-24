/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DivCol from './DivCol';
import DivRow from './DivRow';
import StreamerInfo from './StreamerInfo';
import Verified from './Verified';
import Follow from './Follow';
import Subscribe from './Subscribe';
import BackgroundPic from './BackgroundPic';
import Bubble from './Bubble';
import Live from './Live';
import Menu from './Menu';
import DropMenu from './DropMenu';
import NavButton from './NavButton';
import SubscribeModal from './SubscribeModal';

const BarDiv = styled.div`
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
  padding-left: 10px;
  padding-right: ${(props) => (props.last ? '10px' : '0px')};
`;

class MainBar extends React.Component {
  constructor(props) {
    super(props);
    this.subscribeClick = this.subscribeClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleBubbleIn = this.handleBubbleIn.bind(this);
    this.handleBubbleOut = this.handleBubbleOut.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleResizeMain = this.handleResizeMain.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleStreamerClick = this.handleStreamerClick.bind(this);
    this.basePages = ['Home', 'Videos', 'Clips', 'Followers'];
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
      bubbleLive: 0,
      bubbleVerified: 0,
      page: 'Home',
      pages: ['Home', 'Videos', 'Clips', 'Followers'],
      visiblePages: 4,
      windowWidth: window.innerWidth,
      menuClicked: false,
      menuPosition: 0,
    };
  }

  componentDidMount() {
    axios.get('/streamers/random')
      .then((res) => this.setState(res.data))
      .catch((err) => {
        console.log(err);
      });
    this.handleResizeMain();
    window.addEventListener('resize', this.handleResizeMain);
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
    const { isSubscribed } = this.state;
    this.setState({ isSubscribed: !isSubscribed });
  }

  handleResizeMain() {
    const newWidth = window.innerWidth;
    if (newWidth < 675) {
      this.setState({ windowWidth: newWidth, visiblePages: 1 });
    }
    if (newWidth < 745 && newWidth >= 675) {
      this.setState({ windowWidth: newWidth, visiblePages: 2 });
    }
    if (newWidth < 800 && newWidth >= 745) {
      this.setState({ windowWidth: newWidth, visiblePages: 3 });
    }
    if (newWidth >= 800) {
      this.setState({ windowWidth: newWidth, visiblePages: 4, pages: this.basePages });
    }
  }

  handleMenuClick(e) {
    const { menuClicked } = this.state;
    const rect = e.target.getBoundingClientRect();
    this.setState({ menuClicked: !menuClicked, menuPosition: rect.x });
  }

  handleDropdownClick(e) {
    const { visiblePages, pages } = this.state;
    const { btnname } = e.target.dataset;
    const maxVisibleIndex = visiblePages - 1;
    const pageToReplace = pages[maxVisibleIndex];
    const indexOfToReplace = pages.indexOf(btnname);
    const newArrangement = pages.slice();
    newArrangement.splice(maxVisibleIndex, 1, btnname);
    newArrangement.splice(indexOfToReplace, 1, pageToReplace);
    this.setState({ page: btnname, pages: newArrangement, menuClicked: false });
  }

  render() {
    const {
      name, backgroundPicUrl, avatarPicUrl, isVerified, isLive, streamerIsClicked, isSubscribed,
      page, pages, bubbleVerified, bubbleLive, menuClicked, menuPosition, windowWidth, subscriptionEmotes,
      customEmotes, customEmotesCount,
    } = this.state;
    const realUrl = `url(${backgroundPicUrl})`;

    return (
      <DivCol>
        <DivCol style={{ backgroundColor: 'black' }}>
          {!streamerIsClicked
            ? (
              <BackgroundPic imgUrl={realUrl} style={{ height: '0px', width: '50%', transition: 'height 600ms, width 700ms' }} />
            )
            : (
              <BackgroundPic imgUrl={realUrl} style={{ height: '400px', width: '100%', transition: 'height 600ms, width 600ms' }} />
            )}
          <BarDiv>

            <DivRow onClick={this.handleStreamerClick}>
              <StreamerInfo name={name} avatar={avatarPicUrl} />

              <Div>
                {isVerified ? <Verified enter={this.handleBubbleIn} leave={this.handleBubbleOut} /> : false}
                {bubbleVerified ? <Bubble style={{ left: (bubbleVerified + 22) }}>Verified User</Bubble> : false}
              </Div>

              <Div>
                {isLive ? <Live data-status="live" onMouseEnter={this.handleBubbleIn} onMouseLeave={this.handleBubbleOut}>LIVE</Live> : false}
                {bubbleLive ? <Bubble style={{ left: (bubbleLive + 38) }} live>Live Now</Bubble> : false}
              </Div>

            </DivRow>

            <Menu pages={pages} page={page} buttonClick={this.handleNavClick} dotsClick={this.handleMenuClick} />

            <Div nav last>
              <Div>
                <Follow />
              </Div>

              <Div>
                <Subscribe click={this.subscribeClick} />
              </Div>

            </Div>

          </BarDiv>
        </DivCol>
        {menuClicked
          ? (
            <DropMenu style={{ left: (menuPosition - 65), top: (streamerIsClicked ? '450px' : '50px') }}>
              {(windowWidth < 676)
                ? (
                  <div data-btnname={pages[1]} onClick={this.handleDropdownClick}>
                    <NavButton data-btnname={pages[1]} selected={page === pages[1]} onClick={this.handleDropdownClick}>
                      {pages[1]}
                    </NavButton>
                  </div>
                ) : false}
              {(windowWidth < 746)
                ? (
                  <div data-btnname={pages[2]} onClick={this.handleDropdownClick}>
                    <NavButton data-btnname={pages[2]} selected={page === pages[2]} onClick={this.handleDropdownClick}>
                      {pages[2]}
                    </NavButton>
                  </div>
                ) : false}
              {(windowWidth < 801)
                ? (
                  <div data-btnname={pages[3]} onClick={this.handleDropdownClick}>
                    <NavButton data-btnname={pages[3]} selected={page === pages[3]} onClick={this.handleDropdownClick}>
                      {pages[3]}
                    </NavButton>
                  </div>
                ) : false}
            </DropMenu>
          ) : false}
        {isSubscribed
          ? (
            <SubscribeModal
              click={this.subscribeClick}
              emotes={subscriptionEmotes}
              custom={customEmotes}
              count={customEmotesCount}
              backgroundUrl={backgroundPicUrl}
              avatarPic={avatarPicUrl}
              name={name}
            />
          ) : false}
      </DivCol>
    );
  }
}

export default MainBar;
