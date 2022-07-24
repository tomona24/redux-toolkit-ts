import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const countSelector = (state: RootState) => state.counter;
