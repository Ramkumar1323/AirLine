 

class Otp  {
    PhoneNumber 
    Email       
    Otp        
}

function HI(){
    console.log("xctfvgbhjnkdsmybdisidihdihudhidsuhudshuihiuhdsuhuds")
}
var value1223 = sessionStorage.getItem('myvalue')
console.log("from js.....",value1223)
function Click(){
    const mob = new Otp();
    console.log("from js.3433....")
  console.log("data------------",value1223)
  const vd = document.getElementById("otpvalue02").value
  console.log("jdiojiojdsi",vd)
  mob.PhoneNumber = value1223;
  mob.Email = "";
  mob.Otp = vd;
 document.getElementById("form23").addEventListener('click',function(ev){
    ev.preventDefault()
    })
    PhoneOtp(mob);
}
  
 async function PhoneOtp(number) {
     console.log("otpinfoeeee------",number)
     try{
     await fetch('http://localhost:3000/user/otp_verification',{
        method : 'POST',
        headers : {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : 'null',
          },
          body : JSON.stringify(number),
    }
    ).then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log("dayayguguy--------",data)
        if (data.Message === "NoOtp"){
            const val2 = document.getElementById("otpvalue2")
            const val = '<p id = "ph1">Invalid Otp , please enter correctly..!!!</p>'
            val2.innerHTML = val;  
        }
        if (data.Message === "Time"){
            const val2 = document.getElementById("otpvalue2")
            const val = '<p id = "ph1">Otp Expired</p>'
            val2.innerHTML = val;  
        }
        if (data.Message === ""){
            alert("Otp verified ...!"); 
            redirect()
        }
        const vd = document.getElementById("otpvalue02").value
        if (vd === ""){
        const val2 = document.getElementById("otpvalue")
        const val = '<p id = "ph11">'+data.Message+'</p>'
        val2.innerHTML = val;
        }
    });
     }catch(error){
  console.log(error)
     }
}

function Removetag(str){
    console.log("FROM REMOVE TAG.....",str+"1")
    const val1 = document.getElementById("otpvalue2")
    val1.innerHTML = '<p id = "ph1"></p>'
  }

  function redirect() {
    window.location.href= "email.html"
}