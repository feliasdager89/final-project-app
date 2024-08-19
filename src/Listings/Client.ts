import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
export const LISTINGS_API = `${REMOTE_SERVER}/api/listings`;

export const findAllListings = async () => {
    const response = await axios.get(LISTINGS_API);
    return response.data;
}; 

export const findListingById = async (id: string) => {
    const response = await axios.get(`${LISTINGS_API}/${id}`);
    return response.data;
};

export const createListing = async (listing: any) => {
    const response = await axios.post(LISTINGS_API, listing);
    return response.data;
};

export const updateListing = async (listing: any) => {
    const response = await axios.put(`${LISTINGS_API}/${listing._id}`, listing);
    return response.data;
};

export const deleteListing = async (id: string) => {
    const response = await axios.delete(`${LISTINGS_API}/${id}`);
    return response.data;
}; 

