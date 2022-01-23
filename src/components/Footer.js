const Footer = () => {
  return (
    <div className="row my-3 mx-auto">
      <p>
        <button
          className="btn btn-success"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i className="bi bi-info-circle mr-2"></i>
          Key
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">AQI</th>
                <th scope="col">Air Pollution Level</th>
                <th scope="col">Health Implications</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white" style={{ backgroundColor: "#009966" }}>
                <td>0-50</td>
                <td>Good</td>
                <td>
                  Air quality is considered satisfactory, and air pollution
                  poses little or no risk
                </td>
              </tr>

              <tr style={{ backgroundColor: "#ffde33" }}>
                <td>51-100</td>
                <td>Moderate</td>
                <td>
                  Air quality is acceptable; however, for some pollutants there
                  may be a moderate health concern for a very small number of
                  people who are unusually sensitive to air pollution.
                </td>
              </tr>
              <tr style={{ backgroundColor: "#ff9933" }}>
                <td>101-150</td>
                <td>Unhealthy for Sensitive Groups</td>
                <td>
                  Members of sensitive groups may experience health effects. The
                  general public is not likely to be affected.
                </td>
              </tr>
              <tr className="text-white" style={{ backgroundColor: "#cc0033" }}>
                <td>151-200</td>
                <td>Unhealthy</td>
                <td>
                  Everyone may begin to experience health effects; members of
                  sensitive groups may experience more serious health effects
                </td>
              </tr>
              <tr className="text-white" style={{ backgroundColor: "#660099" }}>
                <td>201-300</td>
                <td>Very Unhealthy</td>
                <td>
                  Health warnings of emergency conditions. The entire population
                  is more likely to be affected.
                </td>
              </tr>
              <tr className="text-white" style={{ backgroundColor: "#7e0023" }}>
                <td>300+</td>
                <td>Hazardous</td>
                <td>
                  Health alert: everyone may experience more serious health
                  effects
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Footer;
