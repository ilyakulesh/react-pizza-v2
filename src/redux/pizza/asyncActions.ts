import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
    "pizza/fetchPizzasStatus",
    async (params) => {
      const { category, search, sortBy, order, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://63334d6b573c03ab0b5bcff0.mockapi.io/items?&page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    } 
  );