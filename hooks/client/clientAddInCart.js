const clientAddInCart = (productId, productsList, setCart, cart) => {

    const productAdd = productsList.find(p => p.id == productId)

    setCart([...cart, productAdd])

}

export default clientAddInCart