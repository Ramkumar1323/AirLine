class flightid {
    static fId

     get() {
        return fId
    }
}


class Search {
  Fromlocation
  Tolocation
  Date
}
function redirect(){
  window.location.href= "booking2.html"
}

function Display1(id){
    console.log("val.............",id) 
    sessionStorage.setItem('id',id)
    var val = sessionStorage.getItem('id')

    console.log("flightid//////////////",val)
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
        // va = Object.keys(data.data)
        // console.log("hdhuhiudsh------",va)
        console.log("dataaaaaaa",data)
        // index = 0;
        data.data.forEach(element => {
            var but = document.getElementById("buttons");
            const varr = '<button class="but3" onclick=Display1(id),redirect() id ='+element.uid+'><span class="s1" id = "val2">'+element.flightid+'</span><span class="s2">'+element.companyname+'</span><span class="s3">'+element.fromlocation+'</span><span class="s4">'+element.tolocation+'</span><span class="s5">'+element.time+'</span><span class="s6">$'+element.ticketprice+'</span></button>';
             but.innerHTML += varr;
            //  index +=1; 
        });
      })
    } catch (error) {
        console.log("erooooorr",error)
    }
}

function Searchflight() {
  console.log("from search--------")
 var from =  document.getElementById("from").value;
 var to =  document.getElementById("to").value;
 var date =  document.getElementById("date").value;
 console.log("data------------",from,to,date)
 if (from != "" && to != "" && date != "") {
  console.log("call thw api00000RRRRRRRRRRFFFFFFFFFRDRDR")
  var info = new Search();
  info.Fromlocation = from;
  info.Tolocation = to;
  info.Date = date
  console.log(info);
  GetFlights(info);
}else{
  console.log("not calingggggg715265276521517825271565262561576571")
}
}

async function GetFlights(value) {
  console.log("From api--------",value)
  try {
    await fetch('http://localhost:3000/flight/search_flight',{
      method : 'POST',
      headers : {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : 'null',
      },
      body : JSON.stringify(value),
    })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log("from data................",data.length)
      console.log("from data.......56756.........",data[0])
      if (data.length == 0) {
        var but = document.getElementById("buttons");
        const varr = '<p class ="p11">No Flights Are Found or try Another Date..!!</p>';
         but.innerHTML += varr;
         const varr1 = '<button class ="butin" onclick=GetAllFlight(),Nobottom()>Reset</button>';
         but.innerHTML += varr1;
      }
      data.forEach(element => {
        var but = document.getElementById("buttons");
        const varr = '<button class="but3" onclick=Display1(id),redirect() id ='+element.uid+'><span class="s1" id = "val2">'+element.flightid+'</span><span class="s2">'+element.companyname+'</span><span class="s3">'+element.fromlocation+'</span><span class="s4">'+element.tolocation+'</span><span class="s5">'+element.time+'</span><span class="s6">$'+element.ticketprice+'</span></button>';
         but.innerHTML += varr;
        //  index +=1; 
    });
    });
  } catch (error) {
    console.log(error)
    alert("something went wrong")
  }

}

function remove() {
  console.log("data----------899898989--")
  var from =  document.getElementById("from").value;
  var to =  document.getElementById("to").value;
  var date =  document.getElementById("date").value;
  console.log("data------------",from,to,date)
  // if (from != "" || to != "" || date != "") {
   if (from == "") {
     var vas  = document.getElementById("ff1");
     vas.innerHTML = '<p>*From is required </p>'
   }
   if (to == "") {
     console.log("to required")
     var vas  = document.getElementById("ff2");
     vas.innerHTML = '<p>*To is required </p>'
   }
   if (date == "") {
    var vas  = document.getElementById("ff3");
    vas.innerHTML = '<p>*Date is required </p>'
     console.log("date required")
   }
   if (from != "") {
    var vas  = document.getElementById("ff1");
    vas.innerHTML = '<p></p>'
  }
  if (to != "") {
    console.log("to required")
    var vas  = document.getElementById("ff2");
    vas.innerHTML = '<p></p>'
  }
  if (date != "") {
   var vas  = document.getElementById("ff3");
   vas.innerHTML = '<p></p>'
    console.log("date required")
  }
  // if (from != "" && to != "" && date != "") {
  //   console.log("call thw api00000RRRRRRRRRRFFFFFFFFFRDRDR")
  // }
}

function Nobottom() {
  console.log("fro bottom--------")
    var but = document.getElementById("buttons");
    const varr = '';
     but.innerHTML = varr;
}

var va1 = document.getElementById("from");
va1.addEventListener('input',remove);
var va2 = document.getElementById("to");
va2.addEventListener('input',remove);
var va3 = document.getElementById("date");
va3.addEventListener('input',remove);
var fi = document.getElementById('find')
fi.addEventListener('click',Nobottom)



