let dbUsers = [
{
    username : "deen",
    password : "12345678",
    name : "Hafizudin",
    email : "hafizudinmuhammad83@gmail.com"
},

{
    username : "mirul",
    password : "1234",
    name : "Amirul",
    email : "amirul@gmail.com"
},

{
    username : "imran",
    password : "5678",
    name : "Imran",
    email : "imran@gmail.com"
},


]

function login(username, password){
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if(matched) {
        if(matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        }
    } else {
        return "Username not found"
    } 
    
}

function register(newusername, newpassword, newname, newemail) {
    //TODO: Check if username exist
    
    let matched = dbUsers.find(element => 
    element.username == newusername)
    if(matched){
        console.log("Username already exist")
    }else { console.log("push successfully")

    dbUsers.push({
        username : newusername,
        password: newpassword,
        name: newname,
        email: newemail
        
    })    }
    
}

// try to login
//console.log( login("deen", "12345678") )
//console.log( login("deen", "123456") )
//console.log( login("den", "12345678") )
console.log( login("idham", "9999") )

register("idham", "9999", "Idham", "idham@gmail.com")
register("idham", "9999", "Idham", "idham@gmail.com")
register("idham", "9999", "Idham", "idham@gmail.com")
register("idham", "9999", "Idham", "idham@gmail.com")
console.log( login("idham", "9999") )

