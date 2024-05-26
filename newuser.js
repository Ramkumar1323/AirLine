class User {
    FirstName 
    Lastname
    Address
    Email
    PhoneNumber
    Password  
}







// Valuses.PhoneInfo ="shuhisaas";
function redirect() {
      window.location.href= "phone.html"
}

console.log("in js........")
// var PhoneInfo1 = document.getElementById("phone").value;
// var EmailInfo1 = document.getElementById("email").value;
// console.log("sayufsfusfyufsyufuysf------23687326876387672-----",PhoneInfo1,EmailInfo1)
function GetUserData(){

    const userdata = new User();

 userdata.FirstName = document.getElementById("fname").value;
 userdata.Lastname = document.getElementById("lname").value;
 userdata.Address = document.getElementById("address").value;
 userdata.Email = document.getElementById("email").value;
 userdata.PhoneNumber = document.getElementById("phone").value;
 userdata.Password = document.getElementById("password").value;

//  Valuses.PhoneInfo ="7328792883"
 sessionStorage.setItem('myvalue',userdata.PhoneNumber)
 sessionStorage.setItem('email',userdata.Email)
 console.log("in js function........",userdata)

document.getElementById("form").addEventListener('click',function(ev){
ev.preventDefault()
})
// redirect();
// Valuses.SetData(userdata.PhoneNumber,userdata.Email);
// Valuses.Getdata();
var val123  = CheckPass();
if (val123 == "0") {
  console.log("fromhuhuhiuds..............",val123)
  PostUser(userdata);
}
}

// Valuses.PhoneInfo =  userdata.PhoneNumber ;

async function PostUser(userdata){

console.log("user data...........",userdata)
console.log("exrcvygbuhnj",userdata.PhoneNumber)
// Valuses.SetData(userdata.PhoneNumber,userdata.Email);

try{
  const res = await fetch('http://localhost:3000/user/create_user',{
    method : 'POST',
    // mode : "no-cors",
    headers : {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : 'null',
    },
    body : JSON.stringify(userdata),
  }).then(res => {
    console.log("gasyugyusga",res)
    return res.json();
  }).then( data => {
    console.log("aushuishiuh--------suih",data.Message,"staus",data.StatusCode)
    if (data.Message === "firstName") {
      console.log("aushuishiuh--------suih",data.Message)
     const val1 = document.getElementById("fname1")
     val1.innerHTML = '<p id = "val1"> * The FirstName Must contain one capital Letter and minimum 3 letter </p>'
    }
    if (data.Message === "LastName") {
      const val1 = document.getElementById("lname1")
      val1.innerHTML = '<p id = "val1"> * The Lastname Must contain one capital Letter and minimum 3 letter </p>'
    }
    if (data.Message === "PhoneNumber") {
      const val1 = document.getElementById("phone1")
      val1.innerHTML = '<p id = "val1"> * The PhoneNumber Must begin (+91) and 10 digit </p>'
    }
    if (data.Message === "phone01") {
      const val1 = document.getElementById("phone1")
      val1.innerHTML = '<p id = "val1"> * The PhoneNumber already in use  </p>'
    }
    if (data.Message === "Email") {
      const val1 = document.getElementById("email1")
      val1.innerHTML = '<p id = "val1"> * The Email id last must be @gmail.com </p>'
    }
    if (data.Message === "email01") {
      const val1 = document.getElementById("email1")
      val1.innerHTML = '<p id = "val1"> * The Email id alrety in use </p>'
    }
    if (data.Message === "Password") {
      const val1 = document.getElementById("password1")
      val1.innerHTML = '<p id = "val1"> * The Password Must contain one capital letter, Sympols , Numbers and atleast 5 letter </p>' 
    }
    if (data.StatusCode === "201") {
      alert("User Created successfully...!!!")
      redirect()
    }
  })
}catch(error){

  alert("check your internet connection and try again")
  console.log("ERROR----",error);
} 
}

function Removetag(str){
  console.log("FROM REMOVE TAG.....",str+"1")
  const val1 = document.getElementById(str+"1")
  val1.innerHTML = '<p id = "val1"></p>'
}


function CheckPass(){
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("re-typepassword").value;
  console.log("fromijidsjijdsoij------",pass1,pass2)
  if (pass1 != pass2) {
     var alrt = document.getElementById("pass1");
     alrt.innerHTML = '<p>* password not matched</p>';
  }
  if (pass1 == pass2) {
    var alrt = document.getElementById("pass1");
    alrt.innerHTML = '<p></p>';
    return "0"
 }
}
var chh = document.getElementById("re-typepassword");
chh.addEventListener('input',CheckPass)
//  const vyyy = Getdata();
//  console.log("bashuihsuihuish------",vyyy.PhoneInfo,vyyy.EmailInfo)


// console.log("usercontactinfo---------",Valuses.PhoneInfo)

// var val888 = Getdata();
// console.log("jiosjiojosia",val888[0],val888[1])
// class MyClass {
//   static staticVar1 = '88089080';
// static staticVar2 = 'ram@';

// constructor(name) {
//   this.name = name;
// }

// static getStaticVar1() {
//   return MyClass.staticVar1;
// }

// static getStaticVar2() {
//   return MyClass.staticVar2;
// }
// static setStaticVar1(value) {
//   MyClass.staticVar1 = value;
// }

// static setStaticVar2(value) {
//   MyClass.staticVar2 = value;
// }

// getName() {
//   return this.name;
// }
// }

// console.log("hushuihsuh",MyClass.getStaticVar1()); // Output: newValue1
// console.log(MyClass.getStaticVar2());
// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }

//   static getStaticVariable() {
//     return MyClass.staticVariable,MyClass.staticVariable;
//   }

//   static setStaticVariable(value1,value2) {
//     MyClass.staticVariable = value1;
//     MyClass.staticVariable = value2;
//   }

//   getName() {
//     return this.name;
//   }
// }

// Accessing and modifying the static variable
// console.log(MyClass.getStaticVariable()); // Output: undefined (initially)

// MyClass.setStaticVariable('ram','kumar');
// console.log(MyClass.getStaticVariable());


 



