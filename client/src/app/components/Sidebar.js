const Sidebar = () =>{
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
              <span>ADMIN</span>
            </li>
            <li></li>
            <li className="active">
              <a href="#">
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="logout">
              <a href="#">
                <i className="fa fa-sign-out"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
}

export default Sidebar;