



var id1 = sessionStorage.getItem('id');
console.log("from...2.......",id1)
Getf(id1);
function Caluculate(rate) {
  
    var val1 = document.getElementById("n1").value;
    var val2 = document.getElementById("n2").value;
    // const rate = 100 ;
   if (val1 >= 0 && val2 >= 0) {
    var total = val1*rate + val2 * rate/2 ;
    console.log("totam amount--------",total)
    var result = document.getElementById("total1")
    var para = '<p class="pp">$'+total+'</p>'
    result.innerHTML = para
   } 
   if (total == "") {
    var result = document.getElementById("total1")
    var para = '<p class="pp">$'+0+'</p>'
    result.innerHTML = para
   }

}
const vvv = document.getElementById("n1");
vvv.addEventListener('input',Caluculate);
console.log("sshuhusaih")
const vvw = document.getElementById("n2");
vvw.addEventListener('input',Caluculate);


async function Getf(id) {
    console.log("fromapi.......",id)
    try {
        await fetch('http://localhost:3000/flight/find_flight/'+id+'',{
            method : 'GET',
            headers : {
              'Content-Type':'application/json',
              'Access-Control-Allow-Origin' : 'null',
            },
          })
          .then(res => {
            return res.json();
          })
          .then(data =>{
            console.log("inside the data--------",data)
          })
    } catch (error) {
        
    }
}

