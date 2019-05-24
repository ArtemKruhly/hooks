import React from 'react';
import { Redirect } from 'react-router-dom';

export default class AdminPage extends React.Component {
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
					{this.props.users.map(user => {
      return (
        <div className="flex">
						{this.redirect()}
							<div>{user.id}</div>
							<div>{user.username}</div>
							<div>{user.password}</div>
				</div>
      );
    })}
			</div>
    );
  }
}
