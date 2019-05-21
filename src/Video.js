import ReactPlayer from 'react-player';
import React from 'react';

export default class Video extends React.Component {

  render() {
    return (
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
        playing={false}
        controls={true}
      />
    );
  }
}
