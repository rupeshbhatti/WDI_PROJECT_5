import React from 'react';
import Axios from 'axios';

import '../../scss/displayCondition.scss';

import GooglePlaces from './GooglePlaces';

class DisplayCondition extends React.Component {
  state = {
    condition: null,
    wikiMedia_summary: ''
  }

  getWikiMediaSummary(condition){
    Axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${condition.replace(/' '/g, '%20')}`)
      .then(res => this.setState({ wikiMedia_summary: res.data.extract }))
      .catch(err => console.log(err));
  }

  // componentDidMount(){
  getCondition(){
    Axios
      .get(`/api/getconditions/${this.props.condition.id}`)
      .then(condition => {
        this.setState({ condition: condition.data });
        this.getWikiMediaSummary(this.props.condition.common_name);
      })
      .catch(err => console.log(err));
  }

  // }

  render(){
    if (this.props.should_stop && !this.state.condition) this.getCondition();

    return(
      <div id="DisplayCondition">
        {this.props.condition &&
          <div className="questionnaire">
            <div className="content">
              <img src="/assets/drWebber.png" />
              <h1>I think you may have: {this.props.condition.common_name && this.props.condition.common_name}</h1>
              { this.state.wikiMedia_summary &&
                <div>
                  <h2>Heres some more information about {this.props.condition.common_name}:</h2>
                  <p>{ this.state.wikiMedia_summary }</p>
                </div>
              }
              { this.state.condition && this.state.condition.acuteness && this.state.condition.severity &&
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
        }
      </div>
    );
  }
}

export default DisplayCondition;
