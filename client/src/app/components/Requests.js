import axios from "axios";
import { useEffect } from "react";

const Requests = (requests) => {
  const displayElements = (elements, option) => {
    let elementArray = elements.requests[`${option}`];
    console.log(elements.requests["openRequests"]);

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.title}</td>
        <td>{item.date_requested}</td>
        <td>{item.service_required}</td>
        <td>{item.name}</td>
        <td>{item.timeout}</td>
        <td>{item.status}</td>
        <td>
          <button id={item.requestID} className="buttons">
            {option === "openRequests" ? (
              <span>Close</span>
            ) : (
              <span>Closed</span>
            )}
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <div className="tabular-wrapper">
      <h3 className="main-title">Requests</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date requested</th>
              <th>Service required</th>
              <th>Name</th>
              <th>Timeout</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {requests ? (
              displayElements(requests, "openRequests")
            ) : (
              <tr>
                <td colSpan="7">No Requests available</td>
              </tr>
            )}
            <h3>Closed Requests</h3>
            {requests ? (
              displayElements(requests, "closedRequests")
            ) : (
              <tr>
                <td colSpan="7">No Requests available</td>
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

export default Requests;
