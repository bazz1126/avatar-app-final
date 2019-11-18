/**
 * @Date:   2019-11-06T15:30:39+00:00
 * @Last modified time: 2019-11-08T19:33:19+00:00
 */



import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Elements from "./Elements";
import Nav from './Nav';




class Home extends React.Component {
  render() {
    return (
      <div className="text-center ">
      <h1>Select Your Element</h1>
        <div className="row">
        <div className="col-sm-4"></div>
          <div className="card col-sm-1">
            <Link to={{ pathname: '/elements', state:{ group: 'Fire+Nation'} }} ><img src="https://i.pinimg.com/originals/2b/98/21/2b9821a1669d1b78df11357bb32487b0.png" width="360" height="360" className="card-img img-fluid"/></Link>
            <Route path="/elements/:group" exact component={Elements}/>
          </div>
          <div className="card col-sm-1">
            <Link to={{ pathname: '/elements', state:{ group: 'Water+Tribe'} }} > <img src="https://i.pinimg.com/originals/07/0a/06/070a06a592fb24a1a07670e41d766f9c.png" className="card-img img-fluid"/></Link>
            <Route path="/elements/:group" exact component={Elements}/>
          </div>
          <div className="card col-sm-1">
            <Link to={{ pathname: '/elements', state:{ group: 'Earth+Kingdom'} }} ><img src="https://vignette.wikia.nocookie.net/ba-sing-se/images/c/cc/EarthKingdomEmblem.png/revision/latest?cb=20090501063452&path-prefix=nl" width="360" height="360" className="card-img img-fluid"/></Link>
            <Route path="/elements/:group" exact component={Elements}/>
          </div>
          <div className="card col-sm-1">
            <Link to={{ pathname: '/elements', state:{ group: 'Air+Nomads'} }} ><img src="https://vignette.wikia.nocookie.net/avatar/images/f/f5/Air_Nomads_emblem.png/revision/latest/scale-to-width-down/150?cb=20090125144136" width="360" height="360" className="card-img img-fluid"/></Link>
            <Route path="/elements/:group" exact component={Elements}/>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }
}

export default Home;
