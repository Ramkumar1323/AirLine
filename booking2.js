
function Caluculate() {
  
    var val1 = document.getElementById("n1").value;
    var val2 = document.getElementById("n2").value;
    const rate = 100 ;
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

