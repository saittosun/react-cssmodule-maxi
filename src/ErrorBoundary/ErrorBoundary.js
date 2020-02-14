// jshint esversion: 6
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>{this.state.errorMessage}</h1>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

////app.js file bolumu////////
// if (this.state.showPersons) {
//   persons = (
//     <div>
//       <Persons
//         persons={this.state.persons}
//         clicked={this.deletePersonHandler}
//         changed={this.nameChangedHandler} />
//       {this.state.persons.map((person, index) => {
//         return (
//           <ErrorBoundary key={person.id}>
//             <Person
//               click={() => this.deletePersonHandler(index)}
//               name={person.name}
//               age={person.age}
//               changed={event => this.nameChangedHandler(event, person.id)}
//             />
//           </ErrorBoundary>
//         );
//       })}
//     </div>
//   );
// }