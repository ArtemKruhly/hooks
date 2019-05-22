import React from 'react';

export default class UsersParser extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
      		data: [],
      };
		}

		componentDidMount() {
				fetch('https://jsonplaceholder.typicode.com/users/')
						.then(response => response.json())
						.then(data => this.setState({ data: data }));
		}

		render() {
				const { data } = this.state;
				console.log(data, 'state');
				return (
						<div>
								{data.map(user => {
										return (
												<div key={user.id}>
														<div>Name: {user.name}</div>
														<div>City: {user.address.city}</div>
												</div>
										);
								})}
						</div>
				);
		}

}
