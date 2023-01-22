let userName=document.getElementById("userName")
let Email = document.getElementById("Email")
let password = document.getElementById("password")
let signUp= document.getElementById("signUp")
let newData =[]

if (localStorage.getItem('user') !=null) {
    newData= JSON.parse(localStorage.getItem('user'))
}else{
    newData=[]
}

signUp.addEventListener("click", function () {
if (userName.value ==''||Email.value==''||password.value =='') {
    alert('all inputs are required')
}else{
    let obj = {
        name: userName.value,
        email: Email.value,
        password: password.value,
    }
    newData.push(obj)
    location.href='./index.html'
    localStorage.setItem('user',JSON.stringify(newData))
}



 
})






function validateEmail() {
    let regex=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     if (regex.test(Email.value)){
         return true
     }else{
         return false
     }
 }

 function validateName() {
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    if (regex.test(userName.value)){
        return true
    }else{
        return false
    }
 }

//  if (validateEmail()&&validateName()) {

//     let newRegister ={
//         userName: userName.value ,
//         Email : Email.value ,
//         password : password.value,
//     }
//     newData.push(newRegister)
//     localStorage.setItem("storge",JSON.stringify(newData))
//     window.location.href="index2.html"
// } else {
//     alert("pleaese inter you name and your email correct")
    
// }