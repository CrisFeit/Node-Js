import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = {
  quantity : PropTypes.number.isRequired
}

// change code above this line
Items.defaultProps = {
  quantity: 0
};

export class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items  quantity={10}/>
  }
};


