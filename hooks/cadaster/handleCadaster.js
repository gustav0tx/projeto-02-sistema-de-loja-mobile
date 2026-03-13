import AsyncStorage from "@react-native-async-storage/async-storage"
import createUser from "./createUser"
import verifyPassword from "./verifyPassword"

const handleCadaster = async (email, passw, secPassw, setPages) => {

    const verify = verifyPassword(passw, secPassw)

    createUser(email, passw, verify)

    if(verify) { setPages(1) }

}

export default handleCadaster