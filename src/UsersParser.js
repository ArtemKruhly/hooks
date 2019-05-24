import React from 'react';
import subscribeToTimer from './ClientSocket';
import moment from 'moment';

export default class UsersParser extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
      		data: [],
        	timestamp: 'no timestamp yet',
      };
		}

		componentDidMount() {
				subscribeToTimer((err, timestamp) => this.setState({
						timestamp,
				}));

				fetch('https://jsonplaceholder.typicode.com/users/')
						.then(response => response.json())
						.then(data => this.setState({ data: data }));
		}

		render() {
				const { data } = this.state;
				return (
						<div>
								<strong style={{ color: 'white' }}>
										This is the timer value: {moment(this.state.timestamp).format('MMMM Do YYYY, h:mm:ss a') || moment()}
								</strong>
								{data.map(user => {
										return (
												<div key={user.id} style={{ marginBottom: '10px' }}>
														<div>Name: {user.name}</div>
														<div>City: {user.address.city}</div>
												</div>
										);
								})}
						</div>
				);
		}

}
