import '../styles/dashboard.css'
const Dashboard = ()=>{
    return (
      <>
        <section class="main">
          <div class="stats">
            <div class="card">
              <i class="fa fa-user"></i>
              <h3>Assets</h3>
              <p id="asset_no">1000</p>
              <button>
                <a href="./assets.html">View All</a>
              </button>
            </div>
            <div class="card">
              <i class="fa fa-user"></i>
              <h3>Locations</h3>
              <p id="location_no">1000</p>
              <button>
                <a href="./locations.html">View All</a>
              </button>
            </div>
            <div class="card">
              <i class="fa fa-user"></i>
              <h3>Consumables</h3>
              <p id="consumables_no">1000</p>
              <button>
                <a href="./consumables.html">View All</a>
              </button>
            </div>
            <div class="card">
              <i class="fa fa-user"></i>
              <h3>Requests</h3>
              <p id="requests_no">1000</p>
              <button>
                <a href="./requests.html">View All</a>
              </button>
            </div>
            <div class="card">
              <i class="fa fa-user"></i>
              <h3>Asset Categories</h3>
              <p id="category_no">1000</p>
              <button>
                <a href="./assetcat.html">View All</a>
              </button>
            </div>
          </div>
          <div>
            <label for="search">SEARCH</label>
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
                <i class="fa fa-search"></i>
              </span>
            </button>
          </div>
          <div class="tabular-wrapper">
            <h3 class="main-title">Assets</h3>
            <div class="table-container">
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
                <tbody id="tableBody"></tbody>
                <tfoot>
                  <tr>
                    <td colspan="7">
                      <button>View all</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      </>
    );
}

export default Dashboard;