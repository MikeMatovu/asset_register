"use client";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Assets from "./components/Assets";
import Locations from "./components/Locations";
import AssetCategories from "./components/AssetCategories";
import Consumables from "./components/Consumables";
import Requests from "./components/Requests";
import { API_ENDPOINTS } from "./utils/apiConstants";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";

const useFetch = async (url) => {
  let response = await axios.get(url).then((res) => res);

  return response;
};

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
      let assets = await useFetch(API_ENDPOINTS.VIEW_ASSETS);
      let locations = await useFetch(API_ENDPOINTS.VIEW_LOCATIONS);
      let consumables = await useFetch(API_ENDPOINTS.VIEW_CONSUMABLES);
      let categories = await useFetch(API_ENDPOINTS.VIEW_CATEGORIES);
      let totals = await useFetch(API_ENDPOINTS.GET_TOTAL);
      setData((prevData) => {
        return {
          ...prevData,
          assets: assets.data,
          locations: locations.data,
          consumables: consumables.data,
          categories: categories.data,
          totals: totals.data,
        };
      });
    })();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "assets":
        return {
          assetPage: true,
          locationPage: false,
          consumablesPage: false,
          requestsPage: false,
          assetCategoryPage: false,
        };

      case "location":
        return {
          assetPage: false,
          locationPage: true,
          consumablesPage: false,
          requestsPage: false,
          assetCategoryPage: false,
        };

      case "consumables":
        return {
          assetPage: false,
          locationPage: false,
          consumablesPage: true,
          requestsPage: false,
          assetCategoryPage: false,
        };
      case "requests":
        return {
          assetPage: false,
          locationPage: false,
          consumablesPage: false,
          requestsPage: true,
          assetCategoryPage: false,
        };
      case "category":
        return {
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
    assetPage: true,
    locationPage: false,
    consumablesPage: false,
    requestsPage: false,
    assetCategoryPage: false,
  });

  const {
    assetPage,
    locationPage,
    consumablesPage,
    requestsPage,
    assetCategoryPage,
  } = state;

  const displayComponent = () => {
    if (assetPage) {
      return <Assets assets={data.assets} />;
    } else if (locationPage) {
      return <Locations locations={data.locations} />;
    } else if (consumablesPage) {
      return <Consumables consumables={data.consumables} />;
    } else if (requestsPage) {
      return <Requests />;
    } else if (assetCategoryPage) {
      return <AssetCategories categories={data.categories} />;
    }
  };
  return (
    <div className="main-container">
      <div className="sidebar--container">
        <Sidebar />
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
