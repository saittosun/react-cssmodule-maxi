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

// const person = props => {
//   // error boundary part
//   // const rnd = Math.random();
//   // if (rnd > 0.7) {
//   //   throw new Error('something went wrong');
//   // }
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };