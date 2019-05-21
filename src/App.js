import React  from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Video from './Video';
import Audio from './Audio';
import Geo from './Geo';
import Login from './Login';
import FunHook from './FunHook';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: 'false',
    };
  }

  componentDidMount() {
    localStorage.setItem('username', 'qwerty');
    localStorage.setItem('pass', '123');
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <header className="App-header">
              <Route exact path = '/' component={Login} />
              <Route exact path = '/location' component={Geo} />
              <Route exact path = '/video' component={Video} />
              <Route exact path = '/audio' component={Audio} />
              <Route exact path = '/hook' component={FunHook} />
            </header>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
