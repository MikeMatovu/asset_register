import "../styles/dashboard.css";
const Card = ({dispatch}) => {
  return (
    <>
      <div className="stats">
        <div className="card">
          <i className="fa fa-user"></i>
          <h3>Assets</h3>
          <p id="asset_no">1000</p>
          <button onClick={() => dispatch({ type: "assets" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <i className="fa fa-user"></i>
          <h3>Locations</h3>
          <p id="location_no">1000</p>
          <button onClick={() => dispatch({ type: "location" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <i className="fa fa-user"></i>
          <h3>Consumables</h3>
          <p id="consumables_no">1000</p>
          <button onClick={() => dispatch({ type: "consumables" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <i className="fa fa-user"></i>
          <h3>Requests</h3>
          <p id="requests_no">1000</p>
          <button onClick={() => dispatch({ type: "requests" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <i className="fa fa-user"></i>
          <h3>Asset Categories</h3>
          <p id="category_no">1000</p>
          <button onClick={() => dispatch({ type: "category" })}>
            <span>View All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
