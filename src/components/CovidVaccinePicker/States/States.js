import React from "react";

const States = (props) => {
  const statesDrop = props.states.map((st) => (
    <option key={st.state_id} id={st.state_id}>
      {st.state_name}
    </option>
  ));

  return (
    <form className="form__control mx-auto">
      <select
        className="form-control custom-select"
        aria-label="Default select example"
        defaultValue="Default"
        id="selected-state"
        onChange={props.fetchDistricts}
      >
        <option value="Default">Select State</option>
        {statesDrop}
      </select>
    </form>
  );
};

export default States;
