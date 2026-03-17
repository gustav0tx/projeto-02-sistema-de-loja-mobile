import AsyncStorage from "@react-native-async-storage/async-storage"

const saveProductsInStorage = async (productsList) => {

    const arrayJson = JSON.parse({ productsList: productsList })

    await AsyncStorage.setItem('juninsenhaSegura', arrayJson)

}

export default saveProductsInStorage