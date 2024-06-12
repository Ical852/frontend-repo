import axios from "axios";
import { BASE_URL } from "../constants";

export const authApi = {
  signIn: async (payload: any) => {
    const response = await axios.post(BASE_URL + "/auth/sign-in", payload);
    return response.data;
  },
  signUp: async (payload: any) => {
    const response = await axios.post(BASE_URL + "/auth/sign-up", payload);
    return response.data;
  },
  signOut: async (payload: any) => {
    const response = await axios.post(BASE_URL + "/auth/sign-out", {}, {
      headers: {
        Authorization: `Bearer ${payload?.token}`,
      },
    });
    return response.data;
  },
};
