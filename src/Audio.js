import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Redirect } from 'react-router-dom';
import FileUploader from './FileUploader';

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
    // const file = this.props.files.map(item => item[0].name);
    return (
      <div>
        {this.redirect()}
        <ReactAudioPlayer
            src={'/audio.mp3'}
            autoPlay={false}
            controls={true}
        />
        <FileUploader
          uploadFile={this.props.uploadFile}
        />
      </div>
    );
  }
}
