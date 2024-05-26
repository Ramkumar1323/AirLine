class flightid {
    static fId

     get() {
        return fId
    }
}


// console.log("from booking.....")
// var but = document.getElementById("buttons");
// console.log("from booking.....",but)
// for (let index = 0; index <= 5 ; index++) {
// const element = '<button class="but3" onclick=Display1(id) id ='+index+'><span class="s1" id = "val2">2AH3'+index+'</span><span class="s2">Indigo</span><span class="s3">Chennai</span><span class="s4">Mumbai</span><span class="s5">20/08/2025</span><span class="s6">$299</span><span class="s7">18</span></button>';
//     but.innerHTML += element;
// }

function Display1(id){
    console.log("val.............",id) 
    flightid.fId = id;

    console.log("flightid//////////////",flightid.fId)
}

GetAllFlight()
async function GetAllFlight(){
    console.log("iin get all function....")
    try {
      await fetch('http://localhost:3000/flight/get_all_flight',{
        method : 'GET',
        headers : {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : 'null',
        }
         
      }).then(res => {return res.json()})
      .then(data => {
        va = Object.keys(data.data)
        console.log("hdhuhiudsh------",va)
        console.log("dataaaaaaa",data.data[0])
        index = 0;
        data.data.forEach(element => {
            var but = document.getElementById("buttons");
            const varr = '<button class="but3" onclick=Display1(id) id ='+index+'><span class="s1" id = "val2">'+element.flightid+'</span><span class="s2">'+element.companyname+'</span><span class="s3">'+element.from+'</span><span class="s4">'+element.to+'</span><span class="s5">'+element.time+'</span><span class="s6">$'+element.ticketprice+'</span><span class="s7">18</span></button>';
             but.innerHTML += varr;
             index +=1; 
        });
      })
    } catch (error) {
        console.log("erooooorr",error)
    }
}


