import React from 'react';
import Axios from 'axios';

import GooglePlaces from './GooglePlaces';

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
      <div id="displayCondition">
        <div className="questionnaire">
          <h1>Result of your consultation</h1>
          <div className="content">
            <h1>Name of your condition: {this.props.condition.common_name}</h1>
            { this.state.wikiMedia_summary &&
              <p>{ this.state.wikiMedia_summary }</p>
            }
            { this.state.condition.acuteness && this.state.condition.severity &&
              <div>
                <h2>Acuteness: {(this.state.condition.acuteness).replace(/_/g, ' ')}</h2>
                <h2>Severity: {this.state.condition.severity}</h2>
                <h2>Suggested next steps: </h2>
                <p> {this.state.condition.extras.hint}</p>
              </div>
            }
            <h2>Probability: { Math.ceil(this.props.condition.probability * 100) }%</h2>
            {/* <GooglePlaces /> */}
            <p>Please note that this advice is provided solely for informational purposes only. It does not constitute a qualified medical opinion.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCondition;
