document.getElementById("newRegister").innerHTML = localStorage.getItem('name')

document.getElementById("logout").addEventListener("click",function () {
    localStorage.removeItem('name')
    location.href = './sign.html'
})




