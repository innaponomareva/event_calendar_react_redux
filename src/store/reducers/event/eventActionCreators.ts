import { IEvent } from "./../../../models/IEvent";
import UserService from "../../../api/UserService";
import { AppDispatch } from "../../rootReducer";
import { IUser } from "./../../../models/IUser";
import { EventAction, EventActionEnum, GuestAction } from "./types";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): GuestAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): EventAction => ({
    type: EventActionEnum.SET_EVENT,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const json = localStorage.getItem("EVENTS") || "[]";
      const events = JSON.parse(json) as IEvent[];
      events.push(event);
      dispatch(EventActionCreators.setEvents(events));
      localStorage.setItem("EVENTS", JSON.stringify(events));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: () => async (dispatch: AppDispatch) => {
    try {
      const json = localStorage.getItem("EVENTS") || "[]";
      const events = JSON.parse(json) as IEvent[];
      dispatch(EventActionCreators.setEvents(events));
    } catch (error) {
      console.log(error);
    }
  },
};
