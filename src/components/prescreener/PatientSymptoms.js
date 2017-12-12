import React from 'react';
import Select from 'react-select';
import Axios from 'axios';
import 'react-select/dist/react-select.css';

import '../../scss/patientSymptoms.scss';

class PatientSymptoms extends React.Component {
  state = {
    allSymptoms: {},
    selectedOption: ''
  }

  componentDidMount(){
    Axios
      .get('/api/getsymptoms/')
      .then(symptoms => {
        //console.log(symptoms);
        this.setState({ allSymptoms: { value: symptoms.data } });
      })
      .catch(err => console.log(err));
  }

  setSelectedOption = (e) => {
    if (e){
      this.setState({ selectedOption: e.value });
      this.props.handleSymptomInput(e);
    } else {
      this.setState({ selectedOption: '' });
    }
  }

  render(){
    const options = this.state.allSymptoms.value;
    let finalOptions;

    if (options){
      finalOptions = options.map( (option) =>
        Object.assign(
          {},
          {
            value: option.common_name,
            label: option.common_name
          }
        ));
    }

    return(
      <div>
        <div className="questionnaire">
          <form onSubmit={this.props.parseSymptoms}>
            <h1>Enter your symptoms below</h1>
            <div className="content">
              {/* <input type="text" name="symptoms" onChange={this.props.handleSymptomInput} /> */}
              <Select
                name="symptoms"
                value={this.state.selectedOption}
                onChange={this.setSelectedOption}
                options={finalOptions}
              />
              <br />
            </div>
            <button>Complete prescreener</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PatientSymptoms;
