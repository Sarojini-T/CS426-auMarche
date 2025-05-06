import axios from "axios";

// Our API base URL from api-gateway
const API_BASE_URL = "http://localhost:8000";

type UserLocation = {
  location: string;
}

// Example function to fetch Sarah's location from the userDB database
export const fetchUserLocation = async (): Promise<string> => {
  try {
    const response = await axios.get<UserLocation[]>(`${API_BASE_URL}/users/location`);
    return response.data[0].location;
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};
