import React from 'react';
import { Chart } from 'react-google-charts';

class PatientCountries extends React.Component {
  state = {
    data: [
      ['Region', 'Label'],
      ['US', 'North America'],
      ['CA', 'North America'],
      ['GL', 'North America'],
      ['AR', 'Latin and South America'],
      ['BO', 'Latin and South America'],
      ['BR', 'Latin and South America'],
      ['CL', 'Latin and South America'],
      ['CO', 'Latin and South America'],
      ['EC', 'Latin and South America'],
      ['FK', 'Latin and South America'],
      ['GF', 'Latin and South America'],
      ['GY', 'Latin and South America'],
      ['PY', 'Latin and South America'],
      ['PE', 'Latin and South America'],
      ['SR', 'Latin and South America'],
      ['UY', 'Latin and South America'],
      ['VE', 'Latin and South America'],
      ['NI', 'Latin and South America'],
      ['HN', 'Latin and South America'],
      ['SV', 'Latin and South America'],
      ['BZ', 'Latin and South America'],
      ['MX', 'Latin and South America'],
      ['PA', 'Latin and South America'],
      ['CU', 'Latin and South America'],
      ['HT', 'Latin and South America'],
      ['BS', 'Latin and South America'],
      ['DO', 'Latin and South America'],
      ['CR', 'Latin and South America'],
      ['JM', 'Latin and South America'],
      ['AX', 'Europe'],
      ['AL', 'Europe'],
      ['AD', 'Europe'],
      ['AT', 'Europe'],
      ['BY', 'Europe'],
      ['BE', 'Europe'],
      ['BA', 'Europe'],
      ['BG', 'Europe'],
      ['HR', 'Europe'],
      ['CZ', 'Europe'],
      ['DK', 'Europe'],
      ['EE', 'Europe'],
      ['FO', 'Europe'],
      ['FI', 'Europe'],
      ['FR', 'Europe'],
      ['DE', 'Europe'],
      ['GI', 'Europe'],
      ['GR', 'Europe'],
      ['GG', 'Europe'],
      ['VA', 'Europe'],
      ['HU', 'Europe'],
      ['IS', 'Europe'],
      ['IE', 'Europe'],
      ['IM', 'Europe'],
      ['IT', 'Europe'],
      ['JE', 'Europe'],
      ['LV', 'Europe'],
      ['LI', 'Europe'],
      ['LT', 'Europe'],
      ['LU', 'Europe'],
      ['MK', 'Europe'],
      ['MT', 'Europe'],
      ['MD', 'Europe'],
      ['MC', 'Europe'],
      ['ME', 'Europe'],
      ['NL', 'Europe'],
      ['NO', 'Europe'],
      ['PL', 'Europe'],
      ['PT', 'Europe'],
      ['RO', 'Europe'],
      ['RU', 'Europe'],
      ['SM', 'Europe'],
      ['RS', 'Europe'],
      ['SK', 'Europe'],
      ['SI', 'Europe'],
      ['ES', 'Europe'],
      ['SJ', 'Europe'],
      ['SE', 'Europe'],
      ['CH', 'Europe'],
      ['UA', 'Europe'],
      ['GB', 'Europe'],
      ['DZ', 'Northern Africa'],
      ['EG', 'Northern Africa'],
      ['LY', 'Northern Africa'],
      ['MA', 'Northern Africa'],
      ['TN', 'Northern Africa'],
      ['EH', 'Northern Africa'],
      ['SD', 'Central Africa'],
      ['AO', 'Central Africa'],
      ['CM', 'Central Africa'],
      ['CF', 'Central Africa'],
      ['TD', 'Central Africa'],
      ['CG', 'Central Africa'],
      ['CD', 'Central Africa'],
      ['GQ', 'Central Africa'],
      ['GA', 'Central Africa'],
      ['ST', 'Central Africa'],
      ['BW', 'Southern Africa'],
      ['LS', 'Southern Africa'],
      ['NA', 'Southern Africa'],
      ['ZA', 'Southern Africa'],
      ['SZ', 'Southern Africa'],
      ['AU', 'Australia and Oceania'],
      ['NZ', 'Australia and Oceania'],
      ['NF', 'Australia and Oceania'],
      ['AS', 'Australia and Oceania'],
      ['AU', 'Australia and Oceania'],
      ['CK', 'Australia and Oceania'],
      ['FJ', 'Australia and Oceania'],
      ['PF', 'Australia and Oceania'],
      ['GU', 'Australia and Oceania'],
      ['KI', 'Australia and Oceania'],
      ['MH', 'Australia and Oceania'],
      ['FM', 'Australia and Oceania'],
      ['NR', 'Australia and Oceania'],
      ['NC', 'Australia and Oceania'],
      ['NZ', 'Australia and Oceania'],
      ['NU', 'Australia and Oceania'],
      ['NF', 'Australia and Oceania'],
      ['MP', 'Australia and Oceania'],
      ['PW', 'Australia and Oceania'],
      ['PG', 'Australia and Oceania'],
      ['PN', 'Australia and Oceania'],
      ['WS', 'Australia and Oceania'],
      ['SB', 'Australia and Oceania'],
      ['TK', 'Australia and Oceania'],
      ['TO', 'Australia and Oceania'],
      ['TV', 'Australia and Oceania'],
      ['VU', 'Australia and Oceania'],
      ['WF', 'Australia and Oceania'],
      ['RU', 'Russia, Kazakhstan and Mongolia'],
      ['KZ', 'Russia, Kazakhstan and Mongolia'],
      ['MN', 'Russia, Kazakhstan and Mongolia'],
      ['SA', 'Middle East'],
      ['IO', 'India, China and Southeastern Asia'],
      ['IN', 'India, China and Southeastern Asia'],
      ['CN', 'India, China and Southeastern Asia'],
      ['TW', 'India, China and Southeastern Asia'],
      ['BN', 'India, China and Southeastern Asia'],
      ['KH', 'India, China and Southeastern Asia'],
      ['ID', 'India, China and Southeastern Asia'],
      ['LA', 'India, China and Southeastern Asia'],
      ['MY', 'India, China and Southeastern Asia'],
      ['MM', 'India, China and Southeastern Asia'],
      ['PH', 'India, China and Southeastern Asia'],
      ['SG', 'India, China and Southeastern Asia'],
      ['TH', 'India, China and Southeastern Asia'],
      ['TL', 'India, China and Southeastern Asia'],
      ['VN', 'India, China and Southeastern Asia']

    ]
  }

  chartEvents = [
    {
      eventName: 'select',
      callback(Chart){
        const row = Chart.chart.getSelection()[0].row;
        // console.log(this.state.data[row][0]);


      }
    }
  ];

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
              dataMode: 'regions'

            }}
            graph_id="GeoChart"
            width="100%"
            height="400px"
            chartEvents={this.chartEvents}
            legend_toggle
          />
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
          <br />
          <button onClick={this.props.switchVisibleComponent} value="RiskFactors">Continue</button>
        </form>
      </div>
    );
  }
}

export default PatientCountries;
