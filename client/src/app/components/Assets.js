"use client";
import "../styles/dashboard.css";
import "../styles/form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import searchAPI from "../utils/searchApi";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { API_ENDPOINTS } from "../utils/apiConstants";

const AssetForm = () => {
  const [formData, setFormData] = useState({
    assetName: "",
    serial_no: "",
    locationID: "",
    condition: "",
    model: "",
    categoryID: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const createAsset = () => {
    let url = API_ENDPOINTS.ADDASSETS;
    axios
      .post(url, formData)
      .then((res) => {
        console.log("success");
        alert("Success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div class="form">
        <div className="input_field">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="assetName"
            value={formData.assetName}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Category</label>
          <input
            type="text"
            id="category"
            name="categoryID"
            value={formData.categoryID}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Serial No</label>
          <input
            type="text"
            id="serial_no"
            name="serial_no"
            value={formData.serial_no}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Location</label>
          <input
            type="text"
            id="location"
            name="locationID"
            value={formData.locationID}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <label>Status</label>
          <input
            type="text"
            id="status"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          />
        </div>
        <div class="input_field">
          <input onClick={createAsset} value="ADD" id="submitBtn" class="btn" />
        </div>
      </div>
    </>
  );
};

const Assets = ({ assets, chartData }) => {
  const [toggleChart, setToggleChart] = useState(true);
  const [genAssets, setGenAssets] = useState(assets);
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("category");
  const handleToggle = () => {
    setToggleChart((prevToggle) => !prevToggle);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchButtonClick = async () => {
    try {
      const apiResponse = await searchAPI(searchValue, searchType);
      setGenAssets(apiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const displayElements = (elements) => {
    console.log(elements);
    let elementArray = elements.results;

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.asset_name}</td>
        <td>{item.category_name}</td>
        <td>{item.model}</td>
        <td>{item.serial_no}</td>
        <td>{item.location_name}</td>
        <td>{item.status}</td>
        <td>
          <button>Click</button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <div className="assets--container">
        <div className="search">
          <span>
            <input
              type="text"
              placeholder="Lookup Asset by tag or Category"
              id="searchValue"
              value={searchValue}
              onChange={handleSearchValueChange}
            />
          </span>
          <select
            id="searchType"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <option value="category">Search by category</option>
            <option value="serial_no">Search by Serial_no</option>
          </select>
          <button id="searchBtn" onClick={handleSearchButtonClick}>
            <span>
              <FontAwesomeIcon icon={faSearch} className="search--icon" />
            </span>
          </button>
        </div>

        {/* Table */}

        <div className="tabular-wrapper">
          <h3 className="main-title">Assets</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Model</th>
                  <th>Serial No</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                {assets ? (
                  displayElements(genAssets)
                ) : (
                  <tr>
                    <td colSpan="7">No assets available</td>
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
      </div>
      <div className="chart--wrapper">
        <button className="toggleBtn" onClick={handleToggle}>
          {toggleChart ? "SHOW CHART" : "ADD ASSET"}
        </button>
        <h2 style={{ textAlign: "center" }}>{toggleChart ? "" : "STATUS"}</h2>
        {toggleChart ? (
          <AssetForm />
        ) : (
          <Pie
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "ASSETS BY STATUS",
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default Assets;
