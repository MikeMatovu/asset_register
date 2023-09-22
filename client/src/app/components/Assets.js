"use client";
import "../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Assets = ({ assets }) => {
  const tableBody = document.getElementById("tableBody");
  const displayElements = (elements) => {
    let elementArray = elements.results;
    tableBody.innerHTML = "";
    elementArray.map((item) => {
      console.log("FUnction called");
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${item.asset_name}</td>
                <td>${item.category_name}</td>
                <td>${item.model}</td>
                <td>${item.serial_no}</td>
                <td>${item.location_name}</td>
                <td>${item.condition}</td>
                <td><button>Click</button></td>
            `;
      tableBody.appendChild(row);
      return;
    });
  };
  return (
    <>
      <div className="search">
        <span>
          <input
            type="text"
            placeholder="Lookup Asset by tag or Category"
            id="searchValue"
          />
        </span>
        <select id="searchType">
          <option value="category">Search by category</option>
          <option value="serial_no">Search by Serial_no</option>
        </select>
        <button id="searchBtn">
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
              {assets.assets
                ? displayElements(assets.assets)
                : "No assets available"}
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
