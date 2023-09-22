"use client";
import "../styles/dashboard.css";

function formatDate(date) {
  const dateRequested = new Date(date);
  const formattedDate = `${dateRequested.getFullYear()}-${(
    dateRequested.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dateRequested
    .getDate()
    .toString()
    .padStart(2, "0")} ${dateRequested
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateRequested
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dateRequested
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
}

const Consumables = ({consumables}) => {
  const displayElements = (elements) => {
    let elementArray = elements.results;
    console.log(elementArray);

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.category_name}</td>
        <td>{item.quantity}</td>
        <td>{formatDate(item.purchase_date)}</td>
      </tr>
    ));
  };

  return (
    <div className="tabular-wrapper">
      <h3 className="main-title">Consumables</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>category</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {consumables ? (
              displayElements(consumables)
            ) : (
              <tr>
                <td colSpan="7">No consumables available</td>
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

export default Consumables;
