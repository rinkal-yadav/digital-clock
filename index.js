function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let timeH = hh ;
     let timeM =  mm ;
     let timeS = ss;
     let timeA =  session;
  
    document.getElementById("clockHour").innerText = timeH; 
    document.getElementById("clockMin").innerText = timeM; 
    document.getElementById("clockSec").innerText = timeS; 
    document.getElementById("clockPeriod").innerText = timeA; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();