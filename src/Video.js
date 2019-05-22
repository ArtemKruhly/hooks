import ReactPlayer from 'react-player';
import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Video extends React.Component {
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
        <ReactPlayer
            url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
            playing={false}
            controls={true}
        />
      </div>
    );
  }
}
