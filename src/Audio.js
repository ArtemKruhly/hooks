import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Redirect } from 'react-router-dom';

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    if (localStorage.getItem('isAuth') === 'false') {
      return <Redirect to={'/'} />;
    }
  }

  render() {
    return (
      <div>
        {this.redirect()}
        <ReactAudioPlayer
            src={'/audio.mp3'}
            autoPlay={false}
            controls={true}
        />
      </div>
    );
  }
}
