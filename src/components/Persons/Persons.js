// jshint esversion: 6
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDriveStateFromProps(props, state) {
  //   console.log('[Persons.js] getDriveStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
    // return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //snapshot is a data package so to say which you then receive in componentDidUpdate, so that you can save some state right before the update
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'snapshot'};
  }

  // componentWillUpdate() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] is rendering...')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          key={person.id}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;