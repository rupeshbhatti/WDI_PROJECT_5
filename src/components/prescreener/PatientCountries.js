import React from 'react';
import { Chart } from 'react-google-charts';

import data from '../../lib/Countries';
import DataObj from '../../lib/DataObj';

class PatientCountries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    };

    this.handleChartClick = (Chart) => {
      const index = Chart.chart.getSelection()[0].row+1;
      const row = this.state.data.slice(index,index+1)[0];
      row[2] = row[2] === 0 ? 1 : 0;
      const data = [
        ...this.state.data.slice(0, index),
        row,
        ...this.state.data.slice(index+1)
      ];

      this.setState({ data });

      const countryCode = DataObj[row[1]];
      //console.log('COUNTRYCODE IN PATIENTCOUNTRIES',countryCode);
      this.props.handleCountrySelector(countryCode);
    };

    this.chartEvents = [ { eventName: 'select', callback: this.handleChartClick.bind(this) } ];
  }

  render(){
    return(
      <div>
        <form>
          <h2>Select the region you live in and any regions you have visited in the last 12 months</h2>
          <Chart
            chartType="GeoChart"
            data={this.state.data}
            options={{
              enableRegionInteractivity: true,
              dataMode: 'regions',
              colorAxis: {minValue: 0, maxValue: 1, colors: ['#F2F3F4','#0095c8']},
              legend: 'none',
              tooltip: { trigger: 'none' }
            }}
            graph_id="GeoChart"
            width="100%"
            height="400px"
            chartEvents={this.chartEvents}
            legend_toggle
          />
          {/* <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_13" /> North America <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_14" /> Latin and South America <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_15" /> Europe <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_16" /> Northern Africa <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_17" /> Central Africa <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_18" /> Southern Africa <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_19" /> Australia and Oceania <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_20" /> Russia, Kazakhstan and Mongolia <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_21" /> Middle East <br />
          <input onChange={this.props.handleCountrySelector} type="checkbox" name="countries" value="p_22" /> India, China and Southeastern Asia <br /> */}
          <br />
          <button onClick={this.props.switchVisibleComponent} value="RiskFactors">Continue</button>
        </form>
      </div>
    );
  }
}

export default PatientCountries;
