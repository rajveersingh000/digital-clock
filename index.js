const hourE1 = document.getElementById("hours")

const minuteE1 = document.getElementById("Minutes")

const secondsE1 = document.getElementById("seconds")

const ampmE1 = document.getElementById("ampm")


function updateClock() {
 
    let h = new Date().getHours();
        
    let m = new Date().getMinutes();
    
    let s = new Date().getSeconds();
    
   // let ampm = h >= 12 ? 'am' : 'pm';
    if(h > 12) {
       
        h = h - 12
      //  ampm = "pm"
  }


  //let ampm = h >= 12 ? 'am' : 'pm';
  h = h < 10 ? "0" + h : h ;
  m= m < 10 ? "0" + m : m ;
  s= s < 10 ? "0" + s : s  ;
    hourE1.innerText =h;
    minuteE1.innerText =m ;
    secondsE1.innerText =s;
    ampmE1 , (innerText = ampm);
setTimeout(() => {
    
}, 1000);
}
updateClock();

