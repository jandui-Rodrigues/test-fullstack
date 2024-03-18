import axios from "axios";
import { IClient } from "../interface/IClient";

// const port = process.env.REACT_APP_API_PORT || "3001";
// const method = process.env.REACT_APP_API_METHOD || 'http';
// const baseURL = process.env.REACT_APP_API_URL || `${method}://localhost:${port}`;

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const requestData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const requestCreate = async (
  endpoint: string,
  body: IClient,
) => {
  try {
    const response = await api.post(endpoint, body);
    return response.data;
  } catch (error) {
    return false;
  }
};
export const requestUpdate = async (
  endpoint: string,
  body: IClient,
) => {
  try {
    const response = await api.put(endpoint, body);
    return response.data;
  } catch (error) {
    return false;
  }
};

export default api;
