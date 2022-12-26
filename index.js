const objPass = {
    output: '',
    status: false,
    isLength: false,
    isLowerCase: false,
    isUpperCase: false,
    isAtLeastOne: false
};

const objEmail = {
    output: '',
    status: false,
}
const _passwordValidation = (password) => {


    //let output = ' '

    if (password.length < 8) {

        objPass.output = 'Error: Password must be at least 8 characters'
        objPass.isLength = false

    } else if (password.search(/[a-z]/) < 0) {

        objPass.output = "Error: Password must contain at least one lowercase letter";
        objPass.isLowerCase = false


    } else if (password.search(/[A-Z]/) < 0) {

        objPass.output = "Error: Password must contain at least one uppercase letter";
        objPass.isUpperCase = false

    } else if (password.search(/[0-9]/) < 0) {

        objPass.output = "Error: Password must contain at least one number"
        objPass.isAtLeastOne = false

    } else {
        objPass.output = "Success!"
        objPass.status = true
    }

    return objPass
}

const _emailValidation = (email) => {

    //let output = ' '
     if(email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) < 0 ){
        objEmail.status = false
        objEmail.output = "You have entered an invalid email address!"
     }else{
        objEmail.output = "Success!"
        objEmail.status = true
     }

    return objEmail
}
module.exports = {
    _passwordValidation,
    _emailValidation
}
