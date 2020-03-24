import React from 'react';
import styled from 'styled-components';
import Subscribe from './Subscribe';
import DivCol from './DivCol';
import { Twemoji, Emoji } from 'react-emoji-render';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  font-family: 'Roboto';
  z-index: 10;
  top: 0;
  left: 25vw;
  width: 60vw;
  max-width: 700px;
  min-width: 460px;
  height: 1200px;
  #dimdiv {
    z-index: 11;
    position: absolute;
    width: 100%;
    height: 100px;
  }
`;


const Close = styled.div`
  width: 36px;
  height: 36px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: grey;
  img {
    content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/close.png");
  }
  &:hover {
    background-color: grey;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  z-index: 11;
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    img { 
      margin-left: 18px;
      border-radius: 50%;
      padding: 2px 8px;
      width: 55px;
      max-height: 55px;
    }
    h3 {
      font-family: 'Roboto';
      font-weight: 400;
      padding-left: 10px;
      font-size 20px;
    }
  }
`;

const Block1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #DAD7DB;
  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Block2 = styled(Block1)`
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: none;
  padding-bottom: 20px;
  h5 {
    margin: 4px 20px;
  }
  h4 {
    margin: 14px 20px 4px;
  }
  h3 {
    margin: 20px;
  }
  p {
    font-seize: 0.83em;
    margin: 4px 20px;
  }
`;

const EmotSetMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const EmoteSetBar = styled.div`
  align-items: center;
  width: 85%;
  height: 5px;
  background-color: #DAD7DB;
  position: absolute;
  z-index: 11;
`;

const EmoteSet = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
  span {
    background-color: black;
    font-size: 34px;
  }
`;

const CustomDiv = styled.div`
  width: 100%;
  margin: 10px 18px 0;
  display: flex;
  flex-wrap: wrap;
`;

const EmoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  span {
    font-size: 24px;
  }
`;

const BlockDiv = styled.div`
  height: ${(props) => (props.large ? '120px' : '65px')};
  display: flex;
  flex-direction: column;
  h5 {
    margin: 4px 20px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }
`;

const ContainerSus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  justify-items: space-evenly;
  color: ${(props) => (props.sus ? 'white' : 'black')};;
  width: 120px;
  background-color: ${(props) => (props.sus ? '#8643eb' : '#dcdce0')};
  h5 {
    color: white;
    margin-top: 0;
  }
  img {
    margin: 0;
    width: 18px;
    height: auto;
    content: url("https://bitztreambar.s3-us-west-1.amazonaws.com/whiteStar.png");
  }
`;

class SubscribeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      // eslint-disable-next-line react/prop-types
      backgroundUrl, avatarPic, name, click, emotes, custom, count,
    } = this.props;
    const mappedSubsEm = emotes.map((item, index) => (
      <Twemoji className="emoSpan" svg text={`:${item}:`} key={item} data-number={index} />
    ));
    const mappedSubswords = ['1-Month', '3-Month', '6-Month', '1-Year', '2-Year'].map((item, index) => <h6 key={index}>{item}</h6>);
    const mappedCustom = custom.map((item, index) => (
      <EmoWrapper>
        <Twemoji svg className="custom" style={{ padding: '0 4px' }} text={`:${item}:`} key={index} data-number={index} />
      </EmoWrapper>
    ));
    const realUrl = `url("${backgroundUrl}")`;
    return (
      <Main>
        <div id="dimdiv" style={{ backgroundImage: realUrl, opacity: '0.5' }} />
        <Banner>
          <div>
            <img src={avatarPic} alt="My Background" />
            <h3>{name}</h3>
          </div>
          <Close onClick={click}>
            <img style={{ width: '20px', height: 'auto', marginLeft: '0' }} alt="Close Window" />
          </Close>
        </Banner>
        <Block1>
          <BlockDiv>
            <h5 style={{ fontWeight: 'bold' }}>Tier 1 Subscription</h5>
            <h5>Renews monthly at $4.99</h5>
          </BlockDiv>
          <div>
            <ContainerSus sus>
              <h5>Subscribe</h5>
            </ContainerSus>
          </div>
        </Block1>
        <Block2>
          <h3>Tier 1 Subscription</h3>
          <h5>Subscriptions are a great way to directly support the streamers you love and get great benefits too!</h5>
          <h4>Benefits</h4>
          <h5>Ad-free viewing on {name}'s channel (with limited exceptions).</h5>
          <h5>Chat during Subscriber-Only Mode and not affected by chat slow mode.</h5>
          <h5>Watch Subscriber Streams (access depends on Subscription Tier).</h5>
          <h5>Instantly unlock your first Sub Badge and show your support.</h5>
        </Block2>
        <EmotSetMain data-name="main">
          <EmoteSet data-name="set">
            {mappedSubsEm}
          </EmoteSet>
          <EmoteSetBar data-name="grey" />
        </EmotSetMain>
        <EmotSetMain>
          <EmoteSet data-name="set">
            {mappedSubswords}
          </EmoteSet>
        </EmotSetMain>
        <Block2>
          <h5>{count} Custom Emotes</h5>
        </Block2>
        <EmotSetMain data-name="main">
          <CustomDiv>
            {mappedCustom}
          </CustomDiv>
        </EmotSetMain>
      </Main>
    );
  }
}

export default SubscribeModal;
