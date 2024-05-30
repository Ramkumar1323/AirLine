
class FlightInfo {      
	FlightId    
	CompanyName 
	Fromlocation        
	Tolocation   
    Time      
	TicketPrice 
	RunningDays 
	TotalSeat 
}

function AddFlight() {

    const values = new FlightInfo();
   
    values.FlightId =  document.getElementById("id").value;
    values.CompanyName =  document.getElementById("name").value;
    values.Fromlocation =  document.getElementById("from").value;
    values.Tolocation =  document.getElementById("to").value;
    values.Time =  document.getElementById("time").value;
    values.TicketPrice =  document.getElementById("price").value;
    values.RunningDays =  document.getElementById("days").value;
    values.TotalSeat =  document.getElementById("seat").value;
    

    console.log("valuesss-",values)
   PostFlight(values)
}

 async function PostFlight(value){
 console.log("djiojido----",value);

  try {
    await fetch('http://localhost:3000/flight/add_flight',{
        method : 'POST',
        headers : {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : 'null',
        },
        body : JSON.stringify(value)
    })
    .then(res => {
        return res.json()
    }).then(data =>{
        console.log("incoming data",data)
        alert("added successfully.........!!!")
    })
  } catch (error) {
    console.log("pdihdoihihd",error)
    alert("added successfully.........!!!")
  }
}

// AddFlight();