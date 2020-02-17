// jshint esversion: 6
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/_aux';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);//This allows us to get access to our context even in places like componentDidMount where we previously couldn't.
  }

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
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>please log in</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3" 
          type="text" 
          onChange={this.props.changed} 
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          value={this.props.name} />
      </Aux>
    );
  }
}

//in this object, you define which props this component uses and which type of data each component should be of.
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);