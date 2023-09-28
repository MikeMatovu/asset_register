"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../utils/apiConstants";

let type_id = localStorage.getItem("type_id");

const RequestsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    service_required: "",
    timeout: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const makeRequest = () => {
    let url = API_ENDPOINTS.MAKEREQUESTS;
    let userID = localStorage.getItem("userID");

    axios.post(url, { ...formData, userID: userID }).then((res) => {
      console.log("sucesss");
      alert("Request added successfully");
    });
  };
  return (
    <>
      <br />
      <div class="form">
        <div class="input_field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Service Required</label>
          <input
            type="text"
            name="service_required"
            value={formData.service_required}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Timeout</label>
          <input
            type="text"
            name="timeout"
            value={formData.timeout}
            onChange={handleChange}
          />
        </div>

        <div class="input_field">
          <input onClick={makeRequest} value="ADD" class="btn" />
        </div>
      </div>
    </>
  );
};

const Requests = (requests) => {
  let type_id = localStorage.getItem("type_id");
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
          {type_id === "1" ? (
            <button
              onClick={() => updateRequests(item.requestID)}
              id={item.requestID}
              className="buttons"
            >
              {option === "openRequests" ? (
                <span>Close</span>
              ) : (
                <span>Closed</span>
              )}
            </button>
          ) : (
            ""
          )}
        </td>
      </tr>
    ));
  };

  const updateRequests = async (id) => {
    let url = "http://localhost:5000/api/v1/updateRequests";
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          requestID: id,
        }),
        headers: {
          "Content-Type": "Application/json",
        },
      }).then(() => {
        location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
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
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="7">
                  <button>View all</button>
                </td>
              </tr>
            </tfoot>
          </table>
          <h4 style={{ margin: "20px 0" }}>Closed requests</h4>
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
      <br />
      <div className="chart--wrapper">
        {type_id == "2" ? <RequestsForm /> : ""}
      </div>
    </>
  );
};

export default Requests;
