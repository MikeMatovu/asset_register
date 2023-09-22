import "../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTasks,
  faWrench,
  faTags,
  faMapMarker,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ dispatch, totals }) => {
  return (
    <>
      <div className="stats">
        <div className="card">
          <FontAwesomeIcon icon={faDesktop} className="search--icon" />
          <h3>Assets</h3>
          <p className="totals" id="asset_no">
            {totals ? totals.assets : <>--</>}
          </p>
          <button onClick={() => dispatch({ type: "assets" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faMapMarker} className="location--icon" />
          <h3>Locations</h3>
          <p className="totals" id="location_no">
            {totals ? totals.locations : <>--</>}
          </p>
          <button onClick={() => dispatch({ type: "location" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faWrench} className="consumables--icon" />
          <h3>Consumables</h3>
          <p className="totals" id="consumables_no">
            {totals ? totals.consumables : <>--</>}
          </p>
          <button onClick={() => dispatch({ type: "consumables" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faTasks} className="requests--icon" />
          <h3>Requests</h3>
          <p className="totals" id="requests_no">
            {totals ? totals.requests : <>--</>}
          </p>
          <button onClick={() => dispatch({ type: "requests" })}>
            <span>View All</span>
          </button>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faTags} className="category--icon" />
          <h3>Asset Categories</h3>
          <p className="totals" id="category_no">
            {totals ? totals.categories : <>--</>}
          </p>
          <button onClick={() => dispatch({ type: "category" })}>
            <span>View All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
