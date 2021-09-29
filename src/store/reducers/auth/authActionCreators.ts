import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../rootReducer";
import {
  AuthActionEnum,
  IsAuthAction,
  ErrorAction,
  IsLoadingAction,
  UserAction,
} from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): UserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): IsAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (isLoading: boolean): IsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): ErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await UserService.getUsers();
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("AUTH", "true");
            localStorage.setItem("USERNAME", mockUser.username);
            dispatch(AuthActionCreators.setUser(mockUser));
            dispatch(AuthActionCreators.setIsAuth(true));
          } else {
            dispatch(
              AuthActionCreators.setError("Username or password is incorrect!")
            );
          }
        }, 1000);
      } catch (error) {
        dispatch(AuthActionCreators.setError("Error"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("AUTH");
    localStorage.removeItem("USERNAME");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
