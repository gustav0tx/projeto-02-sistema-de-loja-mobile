import AsyncStorage from "@react-native-async-storage/async-storage"

const searchUser = async (email, passw) => {

    try{

        const user = AsyncStorage.getItem(passw.concat(email))

        if(user != null) { return user } else { throw new Error('usuario ta vazio') }

    } catch(e) {
        console.log(e)
    }

}

export default searchUser