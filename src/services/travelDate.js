import api from "./api";

export async function upvote(set) {
    const response = await api.post(`/date/${set}`);
    return response.data;
  }