import axios from "axios";
import { BASE_URL } from "../constants";

export const userApi = {
  userUpdate: async (payload: any) => {
    const response = await axios.post(BASE_URL + "/users/update-user-data", payload, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    });
    return response.data;
  },
  userFetch: async (payload: any) => {
    const response = await axios.get(BASE_URL + "/users/fetch-user-data", {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    });
    return response.data;
  },
};
