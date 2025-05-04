import { API } from "./axios";

export async function updateStash(id: string, data: any) {
  try {
    const res = await API.patch(`/stash/editStashItem/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Failed to update stash item:", err);
    throw err;
  }
}