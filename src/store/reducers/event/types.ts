import { IEvent } from "./../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENT = "SET_EVENT",
}

export interface GuestAction {
  type: EventActionEnum.SET_GUESTS;
  payload: IUser[];
}

export interface EventAction {
  type: EventActionEnum.SET_EVENT;
  payload: IEvent[];
}

export type EventActions = GuestAction | EventAction;
