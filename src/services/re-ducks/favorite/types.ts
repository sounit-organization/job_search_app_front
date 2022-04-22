import { Action } from "redux";
import { IJob } from "../../../domain/Job";

export type FavoriteState = {
  favoriteJobs: IJob[];
};

export type FavoriteActionTypes = Action;
