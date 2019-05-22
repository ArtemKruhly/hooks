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
    this.addedUser = this.addedUser.bind(this);
  }

  addedUser() {
    this.props.addUser(this.state.username, this.state.password);
    alert(`User ${this.state.username} has been added`);
    this.setState({
      username: '',
      password: '',
    });
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let curUser = this.props.users.map(item => item.username).find(us => us === this.state.username);
    let curPass = this.props.users.map(item => item.password).find(ps => ps === this.state.password);
    if (curUser && curPass) {
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('username', curUser);
      document.location.reload(true);
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
      <Form onSubmit={this.handleSubmit} className="login_form" style={document.location.pathname === '/test' ? { display: 'none' } : {}}>
					{(localStorage.getItem('isAuth') === 'false') ?
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
                <div className="submit_btn">
                  <Button type='submit'>Login</Button>
                  <Button onClick={this.addedUser}>Add new user</Button>
                </div>
							</div>
					:
							<Content />
					}
				</Form>
    );
  }
}
