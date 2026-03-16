const clientBuy = (productId, productsList, setProductsList) => {

    const filteredProducts = productsList.filter(p => p.id !== productId)
    
    setProductsList(filteredProducts)
}

export default clientBuy