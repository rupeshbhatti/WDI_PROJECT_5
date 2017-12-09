import React from 'react';

class DisplayCondition extends React.Component {

  render(){

    return(
      <div>
        <h1>Result of your consultation</h1>
        <h2>{this.props.condition.common_name}</h2>
      </div>
    );
  }
}

export default DisplayCondition;
