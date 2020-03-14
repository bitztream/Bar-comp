import React from 'react';
import axios from 'axios';
import { Twemoji } from 'react-emoji-render';
 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  componentDidMount() {
    axios.get(`/streamers/${this.props.streamer}`)
      .then(res => {
        console.log('Data successfully fetched!');
        this.setState(res.data);
        console.log('State: ', this.state);
      })
  }
  render() {
    if (!this.state.name) {
      return(
        <div>No State</div>
      )
    } else {
      const subsEmos = this.state.subscriptionEmotes;
      const customEmos = this.state.customEmotes;
      let mapped = subsEmos.map((item, index) => {
        return(
          <div>
      <Twemoji svg text={`:${item}:`} key={index}/>
      </div>
      )});
      let mappedCustom = customEmos.map((item, index) => {
        return(
          <div>
      <Twemoji svg text={`:${item}:`} key={item}/>
      </div>
      )});
      return(
        <div className="container">
          Hello from React! {this.state.name}
          <div>Base Emotes Set{mapped}</div>
        <div>Custom Emotes set {mappedCustom}</div>
        <div>background Pic
          <img src={this.state.backgroundPicUrl} alt="BackGroundPic" />
        </div>
          </div>
      )
    }
  }
}

export default App;