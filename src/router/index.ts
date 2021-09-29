import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];
