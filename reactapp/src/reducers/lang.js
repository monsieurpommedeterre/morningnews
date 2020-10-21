export default function(userLang = 'fr', action){

    if(action.type == 'changelang'){
        var newUserLang = action.lang
        return newUserLang
    } else {
        //console.log('action else', action)
        return userLang
    }
}