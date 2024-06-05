
console.log("from here....js")

function redirect(str) {
  console.log("namemmmm....",str)
  
  alert(str)
  if(str != ""){
    window.location.href= "user.html"
  }
}

class Credentials {
  Email
  Password
}

 function Display(){

  var Email = document.getElementById("UserName").value;
  var Password = document.getElementById("Password").value;
  // console.log("infos....123.....",Email,Password)
  document.getElementById("form11").addEventListener('click',function(ev){
    ev.preventDefault()
  })
  const vale1232 = new Credentials();
  vale1232.Email = Email ;
  vale1232.Password = Password
  UserLogin(vale1232)
  // redirect("ii")
}
async function UserLogin(vale1232) {
  console.log("infos.........",vale1232)
  try {
    const res = await fetch('http://localhost:3000/user/login',{
      method : 'POST',
      // mode : "no-cors",
      headers : {
        'Content-Type':'application/json',
        // 'Access-Control-Allow-Origin' : 'null',
      },
    body : JSON.stringify(vale1232),
    }).then(res => {
      console.log("gasyugyusga",res)
      return res.json();
    }).then( data => {
      if (data.Message === "email") {
        const val1 = document.getElementById("email01")
        val1.innerHTML = '<p id = "val1"> * Invalid Email or Email not found </p>'
      }
      if (data.Message === "pass") {
        const val1 = document.getElementById("phone1")
        val1.innerHTML = '<p id = "val1"> * Wrong Password </p>'
      }
      if (data.StatusCode === "200") {
        sessionStorage.setItem('token',data.Message) ;
       alert("Userlogin successfully...!!!!")
       redirect()
      }
      console.log("datagvbhnjm----------",data)
      const tokkk = getToken();
       console.log("tokennnnn....777777777777777777..",tokkk)
    })
 }catch (error) {
  console.log("Errror",error)
 }
}
function Removetag(str){
  console.log("FROM REMOVE TAG.....",str+"1")
  const val1 = document.getElementById(str+"1")
  val1.innerHTML = '<p id = "val1"></p>'
}

function redirect() {
  window.location.href= "user.html"
}

function getToken() {
  console.log("fromkijsijidsojjds--d----")
  var toke = sessionStorage.getItem('token')
  return toke
}




