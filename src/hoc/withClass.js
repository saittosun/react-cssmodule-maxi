// jshint esversion: 6
import React from 'react';

// const withClass = props => {
//   // eslint-disable-next-line no-unused-expressions
//   return (
//   <div className={props.classes}>{props.children}</div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  // eslint-disable-next-line no-unused-expressions
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withClass;