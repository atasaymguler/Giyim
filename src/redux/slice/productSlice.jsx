import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    loading: false,
    selectedProduct: {},
    searchProducts: [],
    search: false
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
        },
        getSearchProducts: (state, action) => {
            state.searchProducts = []
            if (!action.payload) {
                state.search = false
                return
            }
            state.products && state.products.map(product => {
                if (product.title.toLowerCase().includes(action.payload)) {
                    state.searchProducts = [...state.searchProducts, product]
                    state.search = true
                }
            })
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

export const { setSelectedProduct, getSearchProducts } = productSlice.actions

export default productSlice.reducer