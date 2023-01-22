let user =[]
user = JSON.parse(localStorage.getItem('user'))

let Email = document.getElementById('Email')
let passwordSing = document.getElementById('password')
 




document.getElementById("login").addEventListener('click',function(){
if (Email.value == '' || passwordSing.value =='' ) {
    alert('all inputs are required')
}else{
    check()
    
}
})

function check() {
    for (let i = 0; i < user.length; i++) {
        if (Email.value == user[i].email && passwordSing.value == user[i].password) {
            
            let name =user[i].name
            localStorage.setItem('name',name)
            location.href = './index2.html'
            break
        }
        
    }
}









        
