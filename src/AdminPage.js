import React from 'react';

export default class AdminPage extends React.Component {

  render() {
    return (
      <div>
					{this.props.users.map(user => {
							return(
									<div className="flex">
											<div>{user.id}</div>
											<div>{user.username}</div>
											<div>{user.password}</div>
									</div>
							)
					})}
			</div>
    );
  }
}
