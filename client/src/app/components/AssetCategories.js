"use client";
import "../styles/dashboard.css";

const AssetCategories = ({categories}) => {
  const displayElements = (elements) => {
    let elementArray = elements.results;
    console.log(elementArray);

    return elementArray.map((item, index) => (
      <tr key={index}>
        <td>{item.category_name}</td>
        <td>{item.description}</td>
      </tr>
    ));
  };
  return (
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
  );
};

export default AssetCategories;
