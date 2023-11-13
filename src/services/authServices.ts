import axios, { AxiosInstance } from "axios";
import { uuid } from "uuidv4";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "X-DeviceId": uuid(),
  "X-Custom-Header": "custom value",
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
});

class authService {
  static login = async (email: string, password: string): Promise<any> => {
    const response = await axiosInstance.post(
      "http://localhost:3000/api/sign-in",
      {
        email,
        password,
      }
    );

    return response.data;
  };
}

export default authService;
