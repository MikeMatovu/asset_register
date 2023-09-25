"use client";
import "../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import searchAPI from "../utils/searchApi";

const Assets = ({ assets }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("category");

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

const handleSearchButtonClick = async () => {
  try {
    const apiResponse = await searchAPI(searchValue, searchType);
    console.log(apiResponse);
  } catch (err) {
    console.error(err);
  }
};


  const displayElements = (elements) => {
    let elementArray = elements.results;

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.asset_name}</td>
        <td>{item.category_name}</td>
        <td>{item.model}</td>
        <td>{item.serial_no}</td>
        <td>{item.location_name}</td>
        <td>{item.condition}</td>
        <td>
          <button>Click</button>
        </td>
      </tr>
    ));
  };
  return (
    <>
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
                displayElements(assets)
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
    </>
  );
};

export default Assets;
