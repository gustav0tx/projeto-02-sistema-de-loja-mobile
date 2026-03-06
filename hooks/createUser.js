import AsyncStorage from "@react-native-async-storage/async-storage"

const createUser = async (email, pass, cheked) => {

    if(cheked) {

        const obj = {email: email, pass: pass}

        try{

            const objJason = JSON.stringify(obj)

            await AsyncStorage.setItem(pass.concat(email), objJason)
            
        } catch(e) {

            console.log(e)

        }

    }

}

export default createUser