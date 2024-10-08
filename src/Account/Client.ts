import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};


export const profile = async () => {
  const response = await axios.post(`${USERS_API}/profile`);
  return response.data;
};

