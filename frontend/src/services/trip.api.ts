import type { ITrips } from "../types/trips.types";
import api from "./api";
// 여행 계획 리스트 조회
export const getTrips = async () => {
  const response = await api.get("/trips/");
  return response.data;
};
// 단일 여행 계획 리스트 조회
export const getTrip = async (tripId: string) => {
  const response = await api.get(`/trips/${tripId}`);
  return response.data;
};
// 신규 여행 계획 생성
export const createTrip = async (createTrip: ITrips) => {
  const response = await api.post("/trips", createTrip);
  return response.data;
};
//여행 계획 수정
export const updateTrip = async (updateTrip: ITrips) => {
  if (!updateTrip.tripId) {
    return new Error("none TripId");
  }
  const response = await api.post(
    "/trips/update/" + updateTrip.tripId,
    updateTrip,
  );
  return response.data;
};

//여행 계획 삭제

export const deleteTrip = async (tripId: string) => {
  const response = await api.post("/trips/delete/" + tripId);
  return response.data;
};
