import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTasks,
  faWrench,
  faTags,
  faMapMarker,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ dispatch }) => {
  let type_id = localStorage.getItem("type_id");
  const route = useRouter();
  return (
    <>
      <div className="sidebar">
        <div className="logo"></div>
        <ul className="menu">
          <li>
            {/* <img
                style="
              border-radius: 50%;
              height: 70px;
              width: 70px;
              position: fixed;
              position: sticky;
              padding-top: 0;
            "
                src="../resources/face.png"
              /> */}
            <span>{type_id == "1" ? "ADMIN" : "TECHNICIAN"}</span>
          </li>
          <li></li>
          <li className="active">
            <FontAwesomeIcon icon={faDesktop} className="search--icon" />
            <span onClick={() => dispatch({ type: "dashboard" })}>
              Dashboard
            </span>
          </li>

          <li className="active">
            <FontAwesomeIcon icon={faDesktop} className="search--icon" />
            <span>Assets</span>
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faMapMarker} className="search--icon" />
            <span>Locations</span>
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faTags} className="search--icon" />
            <span>Consumables</span>
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faTags} className="search--icon" />
            <span>Requests</span>
          </li>
          <li className="active">
            <FontAwesomeIcon icon={faWrench} className="search--icon" />
            <span>Asset Categories</span>
          </li>
          <li className="active" onClick={() => route.push("/")}>
            <FontAwesomeIcon icon={faDesktop} className="search--icon" />
            <span>LOG OUT</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
