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
import UsersParser from './UsersParser';
import Content from './Content';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      files: [],
    };
    this.addUser = this.addUser.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('isAuth')) {
      localStorage.setItem('isAuth', 'false');
    }

    localStorage.setItem('refreshTime', '3600');

		db.table('users')
			.toArray()
			.then((users) => {
      	this.setState({ users });
    	});

    db.table('files')
      .toArray()
      .then((files) => {
        this.setState({ files });
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

  uploadFile(file) {
    db.table('files')
      .add(file)
      .then((id) => {
        const newList1 = [...this.state.files, Object.assign({}, file, { id })];
        this.setState({ files: newList1 });
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
							<Header
								users={this.state.users}
								history={history}
							/>
							<Content history={history} />
							<header className="App-header">
								<Route path = '/' component={() =>
									<Login
										addUser={this.addUser}
										users={this.state.users}
										history={history}
									/>}
								/>
								<Route exact path = '/location' component={Geo} />
								<Route exact path = '/video' component={Video} />
								<Route exact path = '/audio' component={() =>
									<Audio
										uploadFile={this.uploadFile}
										files={this.state.files}
									/>
								}
								/>
								<Route exact path = '/hook' component={FunHook} />
								<Route exact path = '/space' component={Test} />
								<Route exact path = '/parser' component={() => <UsersParser history={history} />} />
								<Route exact path = '/admin' component={() => <AdminPage users={this.state.users} />} />
							</header>
					</div>
				</Router>
			</BrowserRouter>
    );
  }
}

export default (App);
