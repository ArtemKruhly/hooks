import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Content from './Content';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = localStorage.getItem('username');
    let pass = localStorage.getItem('pass');
    if ((this.state.username === user) && (this.state.password === pass)) {
      localStorage.setItem('isAuth', 'true');
      this.props.history.push('/');
    } else {
      alert('bad credentials');
      this.setState({
        username: '',
        password: '',
      });
      localStorage.setItem('isAuth', 'false');
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
					{!localStorage.getItem('isAuth') || localStorage.getItem('isAuth') === 'false' ?
							<div>
									<FormGroup>
									<Label for="exampleEmail">Username</Label>
									<Input
											type="text"
											name="username"
											value={this.state.username}
											id="exampleEmail"
											onChange={this.handleChange}
									/>
							</FormGroup>
									<FormGroup>
											<Label for="examplePassword">Password</Label>
											<Input
													type="password"
													name="password"
													value={this.state.password}
													id="examplePassword"
													onChange={this.handleChange}
											/>
									</FormGroup>
							<Button type='submit'>Submit</Button>
							</div>
					:
							<Content />
					}
				</Form>
    );
  }
}
