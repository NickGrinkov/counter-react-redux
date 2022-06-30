import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterType } from "../App";

type CounterState = {
    counters: Array<CounterType>;
}

const initialState: CounterState = {
    counters: [],
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state, action: PayloadAction<CounterType>) => {
                state.counters.push(action.payload)
                state.counters.reduce((acc, counter) => {
                    if(counter.id !== action.payload.id) {
                        return action.payload.count = acc + counter.count
                    }
                }, 0)
                state.counters.forEach((counter, index) => {
                    if((index + 1) % 4 === 0) {
                        counter.isFourthCounter = true
                    }
                })
        },
        deleteCounter: (state, action: PayloadAction<CounterType>) => {
            state.counters = state.counters.filter(counter => counter.id !== action.payload.id)
        },
        plusCount: (state, action: PayloadAction<CounterType>) => {
            state.counters.map(counter => counter.id === action.payload.id ? counter.count += 1 : counter.count)
        },
        minusCount: (state, action: PayloadAction<CounterType>) => {
            state.counters.map(counter => counter.id === action.payload.id ? counter.count -= 1 : counter.count)
        }
    }
})

export const { addCounter, deleteCounter, plusCount, minusCount } = counterSlice.actions;

export default counterSlice.reducer;