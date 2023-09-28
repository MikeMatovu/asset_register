"use client";
import "./styles/page.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Assets from "./components/Assets";
import Locations from "./components/Locations";
import AssetCategories from "./components/AssetCategories";
import Consumables from "./components/Consumables";
import Requests from "./components/Requests";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { API_ENDPOINTS } from "./utils/apiConstants";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import HomePage2 from "./dashboard/page";

Chart.register(CategoryScale);

const useFetch = async (url) => {
  let response = await axios.get(url).then((res) => res);

  return response;
};

const App = ({ loginStatus }) => {
  // const { loggedIn, setLoggedIn } = loginStatus;
  // setLoggedIn(true);
  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
      let locations = await useFetch(API_ENDPOINTS.LOCATIONS);
      let labels = locations.data.map((location) => location.location_name);
      let locationCount = locations.data.map(
        (location) => location.status_count
      );
      setBarChartData(() => {
        return {
          labels: labels,
          datasets: [
            {
              label: "Assets By status",
              data: locationCount,
              borderColor: "#fff",
              backgroundColor: "rgb(25, 77, 173)",
              fill: true,
            },
          ],
        };
      });
    })();
  }, []);

  useEffect(() => {
    (async function () {
      let assets = await useFetch(API_ENDPOINTS.VIEW_ASSETS);
      let locations = await useFetch(API_ENDPOINTS.VIEW_LOCATIONS);
      let consumables = await useFetch(API_ENDPOINTS.VIEW_CONSUMABLES);
      let categories = await useFetch(API_ENDPOINTS.VIEW_CATEGORIES);
      let requests = await useFetch(API_ENDPOINTS.VIEW_REQUESTS);
      let totals = await useFetch(API_ENDPOINTS.GET_TOTAL);
      let statuses = await useFetch(API_ENDPOINTS.STATUSES);

      let labels = statuses.data.map((status) => status.status);
      let statusCount = statuses.data.map((status) => status.status_count);

      setPieChartData(() => {
        return {
          labels: labels,
          datasets: [
            {
              // label: "Assets By status",
              data: statusCount,
              backgroundColor: ["#941111", "#11942d", "#50AF95"],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        };
      });
      setData((prevData) => {
        return {
          ...prevData,
          assets: assets.data,
          locations: locations.data,
          consumables: consumables.data,
          categories: categories.data,
          totals: totals.data,
          requests: requests.data,
          statuses: statuses.data,
        };
      });
    })();
  }, []);

  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        // label: "Assets By status",
        data: [],
        backgroundColor: ["#941111", "#11942d", "#50AF95"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Assets By status",
        data: [],
        borderColor: "#fff",
        backgroundColor: "rgba(255, 255, 0, 1)",
        fill: true,
      },
    ],
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "dashboard":
        return {
          dashboard: true,
          assetPage: false,
          locationPage: false,
          consumablesPage: false,
          requestsPage: false,
          assetCategoryPage: false,
        };

      case "assets":
        return {
          dashboard: false,
          assetPage: true,
          locationPage: false,
          consumablesPage: false,
          requestsPage: false,
          assetCategoryPage: false,
        };

      case "location":
        return {
          dashboard: false,
          assetPage: false,
          locationPage: true,
          consumablesPage: false,
          requestsPage: false,
          assetCategoryPage: false,
        };

      case "consumables":
        return {
          dashboard: false,
          assetPage: false,
          locationPage: false,
          consumablesPage: true,
          requestsPage: false,
          assetCategoryPage: false,
        };
      case "requests":
        return {
          dashboard: false,
          assetPage: false,
          locationPage: false,
          consumablesPage: false,
          requestsPage: true,
          assetCategoryPage: false,
        };
      case "category":
        return {
          dashboard: false,
          assetPage: false,
          locationPage: false,
          consumablesPage: false,
          requestsPage: false,
          assetCategoryPage: true,
        };

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    dashboard: true,
    assetPage: true,
    locationPage: false,
    consumablesPage: false,
    requestsPage: false,
    assetCategoryPage: false,
  });

  const {
    dashboard,
    assetPage,
    locationPage,
    consumablesPage,
    requestsPage,
    assetCategoryPage,
  } = state;

  const displayComponent = () => {
    if (dashboard) {
      return <Dashboard chartData={{ barChartData, pieChartData }} />;
    } else if (assetPage) {
      return <Assets assets={data.assets} chartData={pieChartData} />;
    } else if (locationPage) {
      return <Locations locations={data.locations} chartData={barChartData} />;
    } else if (consumablesPage) {
      return <Consumables consumables={data.consumables} />;
    } else if (requestsPage) {
      return <Requests requests={data.requests} />;
    } else if (assetCategoryPage) {
      return <AssetCategories categories={data.categories} />;
    }
  };
  return (
    <div className="main-container">
      <div className="sidebar--container">
        <Sidebar dispatch={dispatch} />
      </div>
      <div className="content--container">
        <div className="card--container">
          <Card dispatch={dispatch} totals={data.totals} />
        </div>
        <div className="reusable--container">{displayComponent()}</div>
      </div>
    </div>
  );
};

export default App;
