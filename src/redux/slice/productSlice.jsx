import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    loading: false,
    selectedProduct: {}
}

const baseUrl = "https://fakestoreapi.com/products"

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        let response = await axios.get("https://fakestoreapi.com/products");
        return response.data
    }
)

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    }, extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
    }
})

export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer