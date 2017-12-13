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
              <div className="speech-bubble">
                <h1>I am <span>{ Math.ceil(this.props.condition.probability * 100) }%</span> certain you have
                  <br/><span>{this.props.condition.common_name && this.props.condition.common_name}</span></h1>
              </div>
              <div>
                { this.state.condition && this.state.condition.severity &&
                  <h2>This has a <span>{this.state.condition.severity}</span> severity</h2>
                }
              </div>
              { this.state.wikiMedia_summary &&
                <div>
                  <h2>Heres some more information about {this.props.condition.common_name}:</h2>
                  <p className="info">{ this.state.wikiMedia_summary }</p>
                </div>
              }
              { this.state.condition &&
                <div>
                  <h2>Suggested next steps: </h2>
                  <p className="info"> {this.state.condition.extras.hint}</p>
                </div>
              }
              {/* <GooglePlaces /> */}
              <div>
                <br />
                <p className="disclaimer">Please note that this advice is provided solely for informational purposes only. It does not constitute a qualified medical opinion.</p>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default DisplayCondition;
