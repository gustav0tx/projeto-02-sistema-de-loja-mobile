const createProduct = (name, description, price, img, setProductsList, productsList, idRef) => {

    const obj = { 
        name: name,
        description: description,
        price: parseInt(price),
        img: img,
        id: idRef.current
    }

    idRef.current += 1

    setProductsList([...productsList, obj])

}

export default createProduct