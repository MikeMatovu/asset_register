const API_BASE_URL = "http://localhost:5000/api/v1";

export const API_ENDPOINTS = {
  VIEW_ASSETS: `${API_BASE_URL}/viewAssets`,
  VIEW_LOCATIONS: `${API_BASE_URL}/viewLocations`,
  VIEW_CONSUMABLES: `${API_BASE_URL}/viewConsumables`,
  VIEW_CATEGORIES: `${API_BASE_URL}/viewCategories`,
  VIEW_REQUESTS: `${API_BASE_URL}/viewRequests`,
  GET_TOTAL: `${API_BASE_URL}/getTotal`,
  SEARCH: `${API_BASE_URL}/search`,
  LOGIN: `${API_BASE_URL}/login`,
  STATUSES: `${API_BASE_URL}/getTotalConditions`,
  LOCATIONS: `${API_BASE_URL}/getAssetsInLocation`,
  ADDASSETS: `${API_BASE_URL}/addAssets`,
  ADDCATEGORIES: `${API_BASE_URL}/addCategories`,
  MAKEREQUESTS: `${API_BASE_URL}/makeRequests`,
};
