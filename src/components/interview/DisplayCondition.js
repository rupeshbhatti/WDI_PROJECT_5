import React from 'react';
import Axios from 'axios';

class DisplayCondition extends React.Component {
  state = {
    condition: {}
  }

  componentDidMount(){
    Axios
      .get(`/api/getconditions/${this.props.condition.id}`)
      .then(condition => {
        console.log('CONDITION', condition);
        this.setState({ condition: condition.data });
      })
      .catch(err => console.log(err));

  }

  render(){

    return(
      <div>
        <h1>Result of your consultation</h1>
        <h2>Name of your condition: {this.props.condition.common_name}</h2>
        { this.state.condition.acuteness && this.state.condition.severity &&
          <div>
            <h2>Acuteness: {this.state.condition.acuteness}</h2>
            <h2>Severity: {this.state.condition.severity}</h2>
            <h2>Suggested next steps: {this.state.condition.extras.hint}</h2>
          </div>
        }
        <h1>Probability: {this.props.condition.probability * 100}%</h1>

      </div>
    );
  }
}

export default DisplayCondition;
