import AsyncStorage from "@react-native-async-storage/async-storage"

const handleLogin = async (email, passw, setPages) => {

    try {

        if(email == 'junin' && passw == 'senhaSegura') {

            setPages(2)

        } else {

            const obj = JSON.parse(await AsyncStorage.getItem(passw.concat(email)))

            if(obj != null) {

                setPages(3)

            }

        }

    } catch(e) {

        console.log(e)

    }

}

export default handleLogin