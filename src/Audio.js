import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class Audio extends React.Component {

  render() {
    return (
      <ReactAudioPlayer
        src={'/audio.mp3'}
        autoPlay={false}
        controls={true}
      />
    );
  }
}
