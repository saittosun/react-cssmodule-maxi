// jshint esversion: 6
import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/_aux';

class Person extends Component {
  render() {
    console.log('[Person.js] is rendering...')
    // return (
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}>
    //       I'm {this.props.name} and I am {this.props.age} years old!
    //     </p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // );
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);