import axios from "axios";

const authApi = axios.create({
  baseURL: "https://core.refacil.co",
});

export default authApi;
