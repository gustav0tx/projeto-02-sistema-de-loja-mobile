const verifyPassword = (passw, secPassw) => {


    if(passw.trim() == secPassw.trim() && passw.length != 0) {
        
        return true

    } else {

        return false
        
    }

}

export default verifyPassword