import React from 'react';
import Select from 'react-select';
import Axios from 'axios';
import 'react-select/dist/react-select.css';

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
        <h2>Enter your symptoms below</h2>
        <form onSubmit={this.props.parseSymptoms}>
          {/* <input type="text" name="symptoms" onChange={this.props.handleSymptomInput} /> */}
          <Select
            name="symptoms"
            value={this.state.selectedOption.value}
            onChange={this.props.handleSymptomInput}
            options={finalOptions}
          />
          <input type="submit" value="Continue to Diagnosis"/>
        </form>
        <hr />
      </div>
    );
  }
}

export default PatientSymptoms;
