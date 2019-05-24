import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      time: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addedUser = this.addedUser.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('isAuth') === 'true') {
      setInterval(() => {
        if (!!localStorage.getItem('expireTime')) {
          let exp = Number(localStorage.getItem('expireTime'));
          this.setState({ time: exp }, () => localStorage.setItem('expireTime', this.state.time));
        }

        this.setState({ time: this.state.time + 1 }, () => localStorage.setItem('expireTime', this.state.time));

        let ref = Number(localStorage.getItem('refreshTime'));
        if (this.state.time >= ref) {
          localStorage.setItem('expireTime', '');
          localStorage.setItem('isAuth', 'false');
          document.location.reload(true);
          this.props.history.push('/');
        }
      }, 1000);
    }
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
      localStorage.setItem('expireTime', this.state.time);
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
      <Form
        onSubmit={this.handleSubmit}
        className="login_form"
        style={document.location.pathname === '/test' ? { display: 'none' } : {}}
      >
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
                  {this.props.history.location.pathname === '/reg' ?
                      <Button
                          onClick={this.addedUser}
                          disabled={!this.state.username || !this.state.password}
                      >
                        Registr
                      </Button>
                      :
                      <Link to={'/reg'}>Registration</Link>
                  }
                  {this.props.history.location.pathname !== '/reg' ?
                      <Button type='submit'>Login</Button>
                      :
                      <Link to={'/'}>Login</Link>
                  }
                </div>
							</div>
              :
							null
					}
				</Form>
    );
  }
}
