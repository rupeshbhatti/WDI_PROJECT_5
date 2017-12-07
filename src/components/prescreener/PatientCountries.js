import React from 'react';

const PatientCountries = ({handleCountrySelector}) => {

  return(
    <div>
      <h2>Select the region you live in and any regions you have visited in the last 12 months</h2>
      <form>
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_13" /> North America <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_14" /> Latin and South America <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_15" /> Europe <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_16" /> Northern Africa <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_17" /> Central Africa <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_18" /> Southern Africa <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_19" /> Australia and Oceania <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_20" /> Russia, Kazakhstan and Mongolia <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_21" /> Middle East <br />
        <input onChange={handleCountrySelector} type="checkbox" name="countries" value="p_22" /> India, China and Southeastern Asia <br />
      </form>
      <hr />
    </div>
  );

};

export default PatientCountries;
