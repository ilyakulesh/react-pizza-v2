import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { Pizza, PizzaSliceState, Status } from "./types";

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
};

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
      setItems(state, action: PayloadAction<Pizza[]>) {
        state.items = action.payload;
      },
    },
    extraReducers: (builder) => {
  
      builder.addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      });
  
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      });
  
      builder.addCase(fetchPizzas.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    },
  });
  
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;