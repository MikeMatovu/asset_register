import axios from "axios";
import { API_ENDPOINTS } from "./apiConstants";

const searchAPI = async (searchValue, searchType) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINTS.SEARCH}/${searchValue}/${searchType}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default searchAPI;
