

var token = sessionStorage.getItem('token');
console.log("TOKEN--",token);
GetUserInfo(token);
async function GetUserInfo(token) {
    console.log("TOKEN--",token);
 try {
    await fetch('http://localhost:3000/user/getUserbyid',{
        method : 'GET',
        headers : {
            'Authorization' : ''+token+'',
            'Content-type' : 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data1 => {
        console.log("data------",data1)
        console.log("data------",data1.data.FirstName)
       var name =  document.getElementById("name");
       var val = '<p>'+data1.data.FirstName+' '+data1.data.LastName+'</p>'
       name.innerHTML = val ;
       sessionStorage.setItem('UserId',data1.data.Id)
    })
 } catch (error) {
    console.log("ERRRORR---------------",error)
 }    

}