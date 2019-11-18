/**
 * @Date:   2019-11-08T13:47:22+00:00
 * @Last modified time: 2019-11-08T14:05:53+00:00
 */



import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import AvatarList from './AvatarList';
import Elements from "./Elements";

class Nav extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/avatar">Avatars</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/avatar" component={AvatarList} />
            <Route path="/elements" component={Elements}/>
          </div>
        </Switch>
      </BrowserRouter>


    );
  }
}

export default Nav;
