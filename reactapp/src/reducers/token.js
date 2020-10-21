export default function(userToken = '', action){

    if(action.type == 'sendToken'){
        //console.log('action if', action)
        var newUserToken = action.token
        console.log("newUserToken", newUserToken)
        return newUserToken
    } else {
        //console.log('action else', action)
        return userToken
    }
}