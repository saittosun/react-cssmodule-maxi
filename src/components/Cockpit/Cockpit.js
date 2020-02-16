//jshint esversion:6 
import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('saved data to cloud!');
    }, 1000);
    //to be more precise, it runs BEFORE the main useEffect function runs, but AFTER the(first) render cycle.
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);//[props.persons] it allows us to control when this executes but if you have no dependencies, they can never change and therefore this can never rerun, it will run for the first time, that is the default but it will never run again.

  // cleanup work with useEffect example
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   // Http request...
  //   const timer = setTimeout(() => {
  //     alert('saved data to cloud!');
  //   }, 1000);
  //   //to be more precise, it runs BEFORE the main useEffect function runs, but AFTER the(first) render cycle.
  //   return () => {
  //     clearTimeout(timer);
  //     console.log('[Cockpit.js] cleanup work in useEffect');
  //   };
  // }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  )
};

export default React.memo(cockpit);