export const calcaluteAmount = (state) => {
    state.totalAmount = 0;
    state.products && state.products.map(product => {
        state.totalAmount += product.price * product.count
    })
}