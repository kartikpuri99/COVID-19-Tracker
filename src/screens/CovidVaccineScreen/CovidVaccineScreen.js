import React from "react";
import CovidVaccinePicker from "../../components/CovidVaccinePicker/CovidVaccinePicker";

const CovidVaccineScreen = () => {
  return (
    <React.Fragment>
      <section id="coviddoctor" className="home">
        <div className="home__box">
          <div className="home__heading">
            <div>
              C
              <span>
                <i className="fas fa-virus"></i>
              </span>
              vid
            </div>
            Vaccine Centres
          </div>
          <div className="home__bottom">
            <a className="btn-down" href="#coviddoctor-card">
              Find the vaccine centres in your area{" "}
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </section>

      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1943.5 315.5"
          className="Layer_1"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M1926.17,0h-3.76l-24.82,54.42L1872.77,0h-3.51l-25,54.85L1819.23,0h-3.72l-24.92,54.63L1765.67,0h-3.31l-25.12,55.06L1712.13,0h-3.59l-25,54.7L1658.64,0h-3.25l-25.15,55.14L1605.09,0h-3.46l-25.05,54.92L1551.53,0h-3l-25.24,55.35L1498,0h-2.81l-25.5,55.89L1444.19,0H1442l-25.69,56.33L1390.64,0h-2.37l-25.59,56.11L1337.09,0h-2l-25.79,56.54L1283.54,0h-1.92l-25.79,56.54L1230,0h-1.57l-26,57-26-57h-1.79l-25.88,56.75L1122.94,0h-1.38l-26.08,57.18L1069.4,0h-1.65l-25.92,56.83L1015.91,0h-1.31L988.48,57.26,962.36,0h-1.52l-26,57-26-57h-1.11L881.48,57.47,855.26,0h-.87L827.92,58,801.46,0h-.22L774.58,58.45,747.92,0h-.44L720.92,58.23,694.36,0h-.79l-.14.19h.82L667.57,58.66,640.9.19h.45L641,0h-.28L614.43,57.73,588.1,0h-.49L561.09,58.16,534.56,0h-.7L507.43,57.94,481,0h-.29L454.08,58.37,427.45,0h-.56L400.43,58,374,0h-.22L347.08,58.45,320.42,0H320L293.42,58.23,267,.22a4.82,4.82,0,0,1-.62.86L240.08,58.66,213.82,1.11a5.08,5.08,0,0,1-.69-.23L186.52,59.21,159.87.78a4.27,4.27,0,0,1-.36.38h.34L133.18,59.64l-26-57a4.31,4.31,0,0,1-1.35-.78L79.52,59.42l-26.46-58-.53-.21-.2.17h.52L26.17,59.85,0,2.47v313H1943.5V38Z"
              />
            </g>
          </g>
        </svg>
      </section>

      <section id="coviddoctor-card" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div className="cards__heading-box text-center mb-4 pb-4 ">
            <h1 className="cards__heading">NearBy Vaccine Centres</h1>
            <hr className="mb-5 "></hr>
          </div>
          <CovidVaccinePicker />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CovidVaccineScreen;
