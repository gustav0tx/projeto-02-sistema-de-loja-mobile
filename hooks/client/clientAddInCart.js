const clientAddInCart = (productId, productsList, setCart, cart) => {

    const filteredProducts = productsList.filter(p => p.id == productId)


    setCart([...cart, ...filteredProducts])
}

export default clientAddInCart