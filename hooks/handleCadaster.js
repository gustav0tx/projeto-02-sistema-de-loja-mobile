import createUser from "./createUser"
import verifyPassword from "./verifyPassword"

const handleCadaster = (email, passw, secPassw, setIsCadaster) => {

    createUser(email, passw, verifyPassword(passw, secPassw))

    setIsCadaster(false)

}

export default handleCadaster