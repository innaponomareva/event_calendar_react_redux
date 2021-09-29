import { AuthActionCreators } from "./auth/authActionCreators";
import { EventActionCreators } from "./event/eventActionCreators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
