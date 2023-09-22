"use client";
import "../styles/dashboard.css";

const Locations = ({ locations }) => {
  const displayElements = (elements) => {
    let elementArray = elements.results;
    console.log(elementArray);

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.location_name}</td>
        <td>{item.room_no}</td>
        <td>{item.department_name}</td>
      </tr>
    ));
  };

  return (
    <div className="tabular-wrapper">
      <h3 className="main-title">Locations</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Location name</th>
              <th>Room number</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {locations ? (
              displayElements(locations)
            ) : (
              <tr>
                <td colSpan="7">No Locations available</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="7">
                <button>View all</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Locations;
