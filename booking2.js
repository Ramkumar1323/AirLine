
// type BookingDetails struct {
// 	UserID       string
// 	FlightId     string
// 	Fromlocation string
// 	Tolocation   string
// 	SeatNum      []int
// 	TotalSeat    Ticket
// 	TotalPrice   string
// 	Date         string
// }

// type Ticket struct {
// 	NoOfChild int
// 	NoOfAdult int
// }
class Ticket {
  NoOfChild
  NoOfAdult
}
var BookingDetails =  {
 "UserID": "",
  "FlightId": "",
  "Fromlocation":"",
  "Tolocation":"",
  "SeatNum":"",
  "NoOfAdult" :"",
  "NoOfChild" :"",
  "TotalPrice" :"",
  "Date":"",
}
// var total = {
//   "Price" : ""
// }


// var data11 = new BookingDetails();
// data11.BookingDetails.NoOfAdult = 100;






var id1 = sessionStorage.getItem('id');
console.log("from...2.......",id1)
Getf(id1);

var ids = sessionStorage.getItem('UserId')
console.log("user DI -----------------",ids);
BookingDetails.UserID = ids ;

function Caluculate() {
  var hiu = sessionStorage.getItem('price')
console.log("sahihoisauhuadhiohdius----------",hiu)
var rate = parseInt(hiu);
  console.log("ticket price---------",rate)
    var val1 = document.getElementById("n1").value;
    var val2 = document.getElementById("n2").value;
    
    // const rate = 100 ;
    BookingDetails.NoOfAdult = parseInt(val1);
    BookingDetails.NoOfChild = parseInt(val2);
   if (val1 >= 0 && val2 >= 0) {
    var total = val1*rate + val2 * rate/2 ;
    console.log("totam amount--------",total)
    var result = document.getElementById("total1")
    var para = '<p class="pp">$'+total+'</p>'
    result.innerHTML = para
    BookingDetails.TotalPrice = total;
   } 
   if (total == "") {
    var result = document.getElementById("total1")
    var para = '<p class="pp">$'+0+'</p>'
    result.innerHTML = para
   }
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&",BookingDetails)
}
const vvv = document.getElementById("n1");
vvv.addEventListener('input',Caluculate);
console.log("sshuhusaih")
const vvw = document.getElementById("n2");
vvw.addEventListener('input',Caluculate);

var pp = "9";
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
            console.log("inside the data--------",data.data.ticketprice
          )
            // BookingDetails.UserID = data.data.user;
            BookingDetails.Fromlocation = data.data.fromlocation;
            BookingDetails.FlightId = data.data.uid;
            BookingDetails.Tolocation = data.data.tolocation;
            // BookingDetails.UserID = "";
            total.Price = data.data.ticketprice;
            sessionStorage.setItem('price',data.data.ticketprice)
            var but = document.getElementById("buttons");
            const varr = '<button class="but2"><span class="s1" id = "val2">'+data.data.flightid+'</span><span class="s2">'+data.data.companyname+'</span><span class="s3">'+data.data.fromlocation+'</span><span class="s4">'+data.data.tolocation+'</span><span class="s5">'+data.data.time+'</span><span class="s6">$'+data.data.ticketprice+'</span></button>';
             but.innerHTML += varr;
             
          })
    } catch (error) {
        
    }
}

var date = sessionStorage.getItem('date');
BookingDetails.Date = date;
var hiu = sessionStorage.getItem('price')
console.log("sahihoisauhuadhiohdius----------",hiu)
var intv = parseInt(hiu);
console.log("sjoisajiojas+++++++++++++++++++++++++++++++++=",intv)
// Caluculate(intv);
console.log("classssss.....jidsjojdis....",BookingDetails.Tolocation)
console.log("classssss.........",date)
var book = document.getElementById("book");
book.addEventListener('click',Send)
function Send() {
  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOO",BookingDetails)
  var val1 = document.getElementById("n1").value;
  var val2 = document.getElementById("n2").value;
  if (val1 != 0 || val2 !=0) {
    console.log("booking process--------")
    AddBooking(BookingDetails);
  }else{
    alert("booking faild")
  }
}

async function AddBooking(value) {
  console.log("inthe book api---------",BookingDetails)
  try {
    await fetch('http://localhost:3000/flight/add_booking',{
    method : 'POST',
    headers : {
      'Content-Type':'application/json',
    },
    body : JSON.stringify(value),
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log("booking data-----------",data)
      if (data.ticketprice != 0) {
        alert("booked succesfully")
      }
    })
  } catch (error) {
    console.log("ERROR-----",error)
  }
}
