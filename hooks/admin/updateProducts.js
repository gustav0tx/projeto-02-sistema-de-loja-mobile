import AsyncStorage from "@react-native-async-storage/async-storage"

const updateProducts = async (setProductsList) => {

    const list = JSON.parse(await AsyncStorage.getItem('juninsenhaSegura'))

    setProductsList(list)

}

export default updateProducts