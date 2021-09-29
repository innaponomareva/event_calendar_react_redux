import { IUser } from "../../../models/IUser";
import { IEvent } from "./../../../models/IEvent";
import { EventActionEnum, EventActions, EventState } from "./types";

const initialState = {
  events: [] as IEvent[],
  guests: [] as IUser[],
};

export default function eventReducer(
  state = initialState,
  action: EventActions
): EventState {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EventActionEnum.SET_EVENT:
      return { ...state, events: action.payload };
    default:
      return state;
  }
}
