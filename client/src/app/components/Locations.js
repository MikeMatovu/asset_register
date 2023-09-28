"use client";
import "../styles/dashboard.css";
import { Bar } from "react-chartjs-2";
import { API_ENDPOINTS } from "../utils/apiConstants";
import { useState } from "react";
import axios from "axios";

const LocationsForm = () => {
  const [formData, setFormData] = useState({
    category_name: "",
    description: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const createLocation = () => {
    let url = API_ENDPOINTS.ADDCATEGORIES;
    axios
      .post(url, formData)
      .then((res) => {
        console.log("success");
        alert("Success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <div class="input_field">
        <label>Category Name</label>
        <input
          type="text"
          name="category_name"
          value={formData.category_name}
          onChange={handleChange}
        />
      </div>
      <div class="input_field">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div class="input_field">
        <button onClick={createLocation} class="submitBtn">
          ADD
        </button>
      </div>
    </div>
  );
};

const Locations = ({ locations, chartData }) => {
  const [toggleChart, setToggleChart] = useState(true);
  const handleToggle = () => {
    setToggleChart((prevToggle) => !prevToggle);
  };
  const displayElements = (elements) => {
    let elementArray = elements.results;

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.location_name}</td>
        <td>{item.room_no}</td>
        <td>{item.department_name}</td>
      </tr>
    ));
  };

  return (
    <>
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
      <div className="chart--wrapper">
        {/* <button className="toggleBtn" onClick={handleToggle}>
          {toggleChart ? "SHOW CHART" : "ADD ASSET"}
        </button> */}
        <h2 style={{ textAlign: "center" }}>ASSETS BY LOCATIONS</h2>

        <Bar
          type="bar"
          width={30}
          height={50}
          options={{
            title: {
              display: true,
              text: "GRAPH",
              fontSize: 15,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
          data={chartData}
        />
      </div>
    </>
  );
};

export default Locations;
