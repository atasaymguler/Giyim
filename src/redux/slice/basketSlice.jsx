import { createSlice } from '@reduxjs/toolkit'

let storageName = "basket"

const getProductFromStorage = () => {
    if (localStorage.getItem(storageName)) {
        return JSON.parse(localStorage.getItem(storageName))
    }
    return []
}

const initialState = {
    products: getProductFromStorage(),
    drawer: false,
    totalAmount: 0

}

const writeProductToStorage = (products) => {
    products.sort((a, b) => a.id - b.id)
    localStorage.setItem(storageName, JSON.stringify(products))
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        addBasket: (state, action) => {

            let findProduct = state.products && state.products.find(product => product.id == action.payload.id)
            if (findProduct) {
                //Aynı üründen var
                let filtredArray = state.products.filter(product => product.id != findProduct.id)
                findProduct.count += action.payload.count
                state.products = [...filtredArray, findProduct]
                writeProductToStorage(state.products)
                console.log("Ürün Eklendi");
            }
            else {
                // Aynı üründen yok.
                state.products = [...state.products, action.payload]
                writeProductToStorage(state.products)
                console.log("Ürün Eklendi");
            }

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calcalute: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map(product => {
                state.totalAmount += product.price * product.count
            })
        }

    },
})

export const { addBasket, setDrawer, calcalute } = basketSlice.actions

export default basketSlice.reducer