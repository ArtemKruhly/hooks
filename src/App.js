import React  from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Video from './Video';
import Audio from './Audio';
import Geo from './Geo';
import FunHook from './FunHook';
import Header from './Header';
import db from './db';
import Login from './Login';
import AdminPage from './AdminPage';
import Test from './Test';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('isAuth')) {
      localStorage.setItem('isAuth', 'false');
    }

    db.table('users')
				.toArray()
				.then((users) => {
      this.setState({ users });
				});

  }

  addUser(username, password) {
    const user = {
      username,
      password,
    };
    db.table('users')
        .add(user)
        .then((id) => {
          const newList = [...this.state.users, Object.assign({}, user, { id })];
          this.setState({ users: newList });
        });
  }

  render() {
    return (
        <BrowserRouter>
						<Router history={history}>
								<div className="App">
										<div className="lines">
												<div className="line" />
												<div className="line" />
												<div className="line" />
										</div>
										<Header users={this.state.users} />
										<header className="App-header">
												<Login
														addUser={this.addUser}
														users={this.state.users}
												/>
												<Route exact path = '/location' component={Geo} />
												<Route exact path = '/video' component={Video} />
												<Route exact path = '/audio' component={Audio} />
												<Route exact path = '/hook' component={FunHook} />
												<Route exact path = '/test' component={Test} />
												<Route exact path = '/admin' component={() => {
														return <AdminPage users={this.state.users} />;
            }
												}
												/>
										</header>
								</div>
						</Router>
        </BrowserRouter>
    );
  }
}

export default (App);
