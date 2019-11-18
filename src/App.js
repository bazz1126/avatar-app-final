/**
 * @Date:   2019-11-06T15:30:38+00:00
 * @Last modified time: 2019-11-08T19:22:51+00:00
 */



import React from "react";
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import axios from "axios";
import AvatarList from "./AvatarList";
import Bender from "./Bender";
import Home from "./Home";
import Elements from "./Elements";
import Nav from './Nav';


class App extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = { characters: [], searchTerm: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   componentDidMount() {
//   axios
//     .get(`https://last-airbender-api.herokuapp.com/api/v1/characters/?name=${this.state.characters}`)
//     .then(response => {
//       console.log(response.data.results);
//       this.setState({ users: response.data.results });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
//
// handleChange(event) {
//   const target = event.target;
//   const value = target.type === 'checkbox' ? target.checked : target.value;
//   const name = target.name;
//
//   this.setState({
//   [name]: value
// });
// }
// render() {
//     let sortedCharacters;
//
//     if (this.state.alphabetical === "az") {
//       console.log("sort");
//       sortedCharacters = this.state.characters.sort((a, b) =>
//         a.name.first > b.name.first ? 1 : -1
//       );
//     } else {
//       sortedCharacters = this.state.characters.sort((a, b) =>
//         a.name.first < b.name.first ? 1 : -1
//       );
//     }
//
//     let filteredCharacters = sortedCharacters;
//
//     if (this.state.searchTerm)
//       filteredCharacters = this.state.characters.filter(c =>
//         c.name.first.startsWith(this.state.searchTerm)
//       );
//
//     const characterNames = filteredCharacters.map(c => {
//       return <Character key={c.id} name={c.name} gender={c.gender} image={c.photoUrl} allies={c.allies} enemies={c.enemies} weapon={c.weapon} />;
//     });
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Search for user:
//             <input
//               type="text"
//               name="searchTerm"
//               value={this.state.searchTerm}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//
//         {characterNames}
//
//         </div>
//       );
//     }
//   }


//
// class Character extends React.Component {
  render() {
    return (
  <Nav />
    );
  }
}

export default App;
