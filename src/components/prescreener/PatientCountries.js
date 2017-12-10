import React from 'react';
import { Chart } from 'react-google-charts';

class PatientCountries extends React.Component {
  state = {
    data: [
      ['Region', 'Label'],
      ['021', 'North America'],
      ['005', 'Latin and South America'],
      ['150', 'Europe'],
      ['015', 'Northern Africa'],
      ['017', 'Central Africa'],
      ['018', 'Southern Africa'],
      ['009', 'Australia and Oceania'],
      ['RU', 'Russia, Kazakhstan and Mongolia'],
      ['KZ', 'Russia, Kazakhstan and Mongolia'],
      ['MN', 'Russia, Kazakhstan and Mongolia'],
      ['SA', 'Middle East'],
      ['142', 'India, China and Southeastern Asia']

    ]
  }

  handleMapClick(e){
    console.log(e);

  }

  render(){
    return(
      <div>
        <h2>Select the region you live in and any regions you have visited in the last 12 months</h2>
        <Chart
          chartType="GeoChart"
          data={this.state.data}
          options={{
            enableRegionInteractivity: true,
            dataMode: 'regions'

          }}
          graph_id="GeoChart"
          width="100%"
          height="400px"
          onClick={this.handleMapClick}
          legend_toggle
        />
        <form>
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_13" /> North America <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_14" /> Latin and South America <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_15" /> Europe <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_16" /> Northern Africa <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_17" /> Central Africa <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_18" /> Southern Africa <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_19" /> Australia and Oceania <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_20" /> Russia, Kazakhstan and Mongolia <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_21" /> Middle East <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_22" /> India, China and Southeastern Asia <br />
        </form>
        <hr />
      </div>
    );
  }
}

export default PatientCountries;
