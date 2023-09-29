"use client";
import "../styles/dashboard.css";
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
      <div className="input_field">
        <label>Category Name</label>
        <input
          type="text"
          name="category_name"
          value={formData.category_name}
          onChange={handleChange}
        />
      </div>
      <div className="input_field">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="input_field">
        <button onClick={createLocation} className="submitBtn">
          ADD
        </button>
      </div>
    </div>
  );
};

const AssetCategories = ({categories}) => {
  const displayElements = (elements) => {
    let elementArray = elements.results;

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.category_name}</td>
        <td>{item.description}</td>
      </tr>
    ));
  };
  return (
    <>
      <div className="tabular-wrapper">
        <h3 className="main-title">Categories</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Category name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {categories ? (
                displayElements(categories)
              ) : (
                <tr>
                  <td colSpan="7">No categories available</td>
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
        <LocationsForm />
      </div>
    </>
  );
};

export default AssetCategories;
