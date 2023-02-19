import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_STORE } from './store.constants';
import { getCatalogs } from '../api/getCatalogs/getCatalogs';


export const fetchCatalogs = createAsyncThunk(
  'fetch/catalogs',
  async () => await getCatalogs(),
);

const storeSlice = createSlice({
  name: 'Store',
  initialState: DEFAULT_STORE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalogs.fulfilled, (state, action) => {
      state.catalogs.push(action.payload);
    });
  },
});

export const store = configureStore({
  reducer: storeSlice.reducer,
});
