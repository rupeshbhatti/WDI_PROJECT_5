import React from 'react';
import { Chart } from 'react-google-charts';

import data from '../../lib/Countries';
import DataObj from '../../lib/DataObj';

import '../../scss/patientCountries.scss';

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
      this.props.handleCountrySelector(countryCode);
    };

    this.chartEvents = [ { eventName: 'select', callback: this.handleChartClick.bind(this) } ];
  }

  render(){
    return(
      <div id="PatientCountries">
        <div className="questionnaire">
          <form>
            <h1>Select the region you live in and any regions you have visited in the last 12 months</h1>
            <div className="content">
              <Chart
                chartType="GeoChart"
                data={this.state.data}
                options={{
                  enableRegionInteractivity: true,
                  dataMode: 'regions',
                  colorAxis: {minValue: 0, maxValue: 1, colors: ['#F2F3F4','#0e6272']},
                  legend: 'none',
                  tooltip: { trigger: 'none' }
                }}
                graph_id="GeoChart"
                width="100%"
                height="400px"
                chartEvents={this.chartEvents}
                legend_toggle
              />
              <br />
            </div>
            <hr />
            <button className="countriesbutton" onClick={this.props.switchVisibleComponent} value="PatientAge">Back</button>
            <button className="countriesbutton" onClick={this.props.switchVisibleComponent} value="RiskFactors">Continue</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PatientCountries;
