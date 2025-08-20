import { createSlice } from '@reduxjs/toolkit'
import { calcaluteAmount } from '../../helpers/calcalute'

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

            }
            else {
                // Aynı üründen yok.
                state.products = [...state.products, action.payload]
                writeProductToStorage(state.products)

            }

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calcalute: (state) => {
            calcaluteAmount(state)
        },
        increment: (state, action) => {
            state.products && state.products.map(product => {
                if (product.id == action.payload) {
                    product.count += 1
                }
            })
            calcaluteAmount(state)
            writeProductToStorage(state.products)
        },
        decrement: (state, action) => {
            let newArray = state.products.filter(product => product.id != action.payload)
            state.products && state.products.map(product => {
                if (product.id == action.payload) {
                    // 1'den fazla ürün var ise bir azaltır.
                    if (product.count > 1) {
                        product.count -= 1
                    }
                    else {
                        state.products = [...newArray]
                    }
                }

            })
            calcaluteAmount(state)
            writeProductToStorage(state.products)
        }

    },
})

export const { addBasket, setDrawer, calcalute, increment, decrement } = basketSlice.actions

export default basketSlice.reducer