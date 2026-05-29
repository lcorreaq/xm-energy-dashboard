import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const fetchHourlyData = async (body) => {
  const response = await api.post("/hourly", body);
  return response.data;
};

export const fetchDailyData = async (body) => {
  const response = await api.post("/daily", body);
  return response.data;
};

export const fetchListsData = async (body) => {
  const response = await api.post("/lists", body);
  return response.data;
};