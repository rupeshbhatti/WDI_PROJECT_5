import React from 'react';
import Axios from 'axios';

class DisplayCondition extends React.Component {
  state = {
    condition: {},
    wikiMedia_summary: ''
  }

  getWikiMediaSummary(condition){
    Axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${condition.replace(/' '/g, '%20')}`)
      .then(res => this.setState({ wikiMedia_summary: res.data.extract }))
      .catch(err => console.log(err));
  }

  componentDidMount(){
    Axios
      .get(`/api/getconditions/${this.props.condition.id}`)
      .then(condition => {
        this.setState({ condition: condition.data });
        this.getWikiMediaSummary(this.props.condition.common_name);
      })
      .catch(err => console.log(err));

  }

  render(){

    return(
      <div>
        <h1>Result of your consultation</h1>
        <h2>Name of your condition: {this.props.condition.common_name}</h2>
        { this.state.wikiMedia_summary &&
          <p>{ this.state.wikiMedia_summary }</p>
        }
        { this.state.condition.acuteness && this.state.condition.severity &&
          <div>
            <h3>Acuteness: {(this.state.condition.acuteness).replace(/_/g, ' ')}</h3>
            <h3>Severity: {this.state.condition.severity}</h3>
            <h3>Suggested next steps: </h3>
            <p> {this.state.condition.extras.hint}</p>
          </div>
        }
        <h2>Probability: { Math.ceil(this.props.condition.probability * 100) }%</h2>
        <p>Please note that this advice is provided solely for informational purposes only. It does not constitute a qualified medical opinion.</p>
      </div>
    );
  }
}

export default DisplayCondition;
