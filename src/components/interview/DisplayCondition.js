import React from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import '../../scss/displayCondition.scss';

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

  getCondition(){
    Axios
      .get(`/api/getconditions/${this.props.condition.id}`)
      .then(condition => {
        this.setState({ condition: condition.data });
        this.getWikiMediaSummary(this.props.condition.common_name);
      })
      .catch(err => console.log(err));
  }

  printDocument() {
    const input = document.getElementById('DisplayCondition');
    const divHeight = document.documentElement.clientHeight; //input.offsetHeight
    const divWidth = document.documentElement.clientWidth; //input.offsetWidth
    const ratio = divHeight / divWidth;

    html2canvas(input)
      .then(canvas => {
        const image = canvas.toDataURL('image/jpeg');
        const doc = new jsPDF(); // using defaults: orientation=portrait, unit=mm, size=A4
        const width = doc.internal.pageSize.width;
        let height = doc.internal.pageSize.height;
        height = (ratio * width);
        doc.addImage(image, 'JPEG', 0, 0, width, height);
        doc.save('DrWebber.pdf');
      });
  }

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
              <div>
                <br />
                <p className="disclaimer">Please note that this advice is provided solely for informational purposes only. It does not constitute a qualified medical opinion.</p>
              </div>
            </div>
            <hr />
            <button className="homebutton" onClick={this.props.switchVisibleComponent} value="Home">Try again?</button>
            <button className="homebutton" onClick={this.printDocument}>Print</button>
          </div>
        }
      </div>
    );
  }
}

export default DisplayCondition;
