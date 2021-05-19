import React from "react";


const Districts = ({ districts, setDist }) => {
  const districtDrop = districts.map((dis) => (
    <option key={dis.district_id} id={dis.district_id}>
      {dis.district_name}
    </option>
  ));
  return (
    <form className="form__control mx-auto mt-5">
      <select
        className="form-control custom-select"
        aria-label="Default select example"
        defaultValue="Default"
        id="selected-district"
        onChange={setDist}
      >
        <option value="Default">Select District</option>
        {districtDrop}
      </select>
    </form>
  );
};


export default Districts;
