import React from 'react';
import PropTypes from 'prop-types';

export class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name='CamperBot'/>
      </div>
    );
  }
};

// change code below this line
function Camper(props){
  return (
    <p>{props.name}</p>
  )
}
Camper.propTypes = {
  name : PropTypes.string.isRequired
}
Camper.defaultProps = {
  name : 'CamperBot'
}