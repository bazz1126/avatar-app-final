/**
 * @Date:   2019-11-06T15:30:38+00:00
 * @Last modified time: 2019-11-08T13:55:37+00:00
 */



import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav';

class AvatarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { avatars: [] };
  }

  componentDidMount() {
    axios
      .get(`https://last-airbender-api.herokuapp.com/api/v1/characters/avatar`)
      .then(response => {
        console.log(response);
        this.setState({ avatars: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    const avatarComponents = this.state.avatars.map(a => {
      return (

          <Avatar key={a.id} name={a.name} gender={a.gender} image={a.photoUrl} allies={a.allies} enemies={a.enemies} weapon={a.weapon}/>
      );
    });
    return (

        <div className="card-columns">{avatarComponents}</div>

    );
  }
}

class Avatar extends React.Component {
  render() {
    console.log(this.props.image);
    return (
    //  <div className="column is-4">
        <div className="card">
          <img src={this.props.image} className="card-img img-fluid"/>
          <h2 className="card-title">
            {this.props.name}
          </h2>
        </div>
    //  </div>
    );
  }
}

export default AvatarList;
