let sessionLength = 25;
let breakLength = 5;
let timeLeft;
let loop = 0;
let seconds = 0;
let stop = 0;
let countInt;

function addSessionTime(){
    sessionLength += 1;
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
}

function deduceSessionTime(){
    if(sessionLength > 1){
        sessionLength -= 1;
    }
    else{
        sessionLength = 1;
    }
    $('#timer-session').text(sessionLength);
    $('#timeLeft').text(sessionLength);
}

function deduceBreakTime(){
    if(breakLength > 1){
        breakLength -= 1;
    }
    else{
        breakLength = 1;
    }
    $('#timer-break').text(breakLength);    
}

function addBreakTime(){
    breakLength += 1;
    $('#timer-break').text(breakLength);
}

function startTimer(){
    if(stop === 0){ // firstTime
        countDown(sessionLength , seconds);
        stop += 1;
    }
    else{
        clearInterval(countInt);
        stop -= 1;
    }
}

function countDown(m , s){
  

    countInt = setInterval(()=>{

        if( m === 0 && s === 0){ // if minutes and second both are zero then we have to start a break time.
            clearInterval(countInt);
            if(loop === 0 ){
                timeLeft = breakLength;
                loop += 1;
                $("#sessionName").text("Current Break");
            }
            else{
                 timeLeft = sessionLength;
                 loop -= 1;
                $("#sessionName").text("Current Session");
                
            }
            countDown(timeLeft , 0);
        }
        else if(s === 0){
          s = 59;
          m -= 1;
          timeLeft = m + ':' + s;
        }
        else if(s != 0){
           if(s <= 10){
               s -= 1;
               timeLeft = m + ':0' + s;               
           }
           else{
               s -= 1;
               timeLeft = m + ':' + s;               
           }
        }
        $('#timeLeft').text(timeLeft);        
    },1000);
}