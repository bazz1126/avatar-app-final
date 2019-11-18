/**
 * @Date:   2019-11-06T15:30:39+00:00
 * @Last modified time: 2019-11-07T15:43:47+00:00
 */



import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Elements extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      group: props.location.state

     };
     console.log(this.state.group.group);
  }

  componentDidMount() {

    axios
      .get(`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${this.state.group.group}`)
      .then(response => {
        console.log(response);
        this.setState({ elements: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    const elementsComponents = this.state.elements.map(e => {
      return (

          <Element key={e.id} name={e.name} gender={e.gender} image={e.photoUrl} allies={e.allies} enemies={e.enemies} weapon={e.weapon}/>
      );
    });
    return (

        <div className="card-columns">{elementsComponents}</div>

    );
  }
}

class Element extends React.Component {
  render() {
    console.log(this.props.image);
    return (
     <div className="column is-4">
        <div className="card">
          <img src={this.props.image} className="card-img img-fluid"/>
          <h2 className="card-title">
            {this.props.name}
          </h2>
          <p className="card-body">
            Allies: {this.props.allies}
          </p>
          <p className="card-body">
            Enemies: {this.props.enemies}
          </p>
        </div>
     </div>
    );
  }
}






export default Elements;
