$(document).ready(()=>{
    
   let $display = $('.total');
   $display.text("0");
   
  $('.numbers a').click(function(){
    let clickDigit = $(this).text();
    let currentDisplay = $display.text();
    let newVal;
    if(currentDisplay === "0"){
      newVal = clickDigit;
    }
    else{
      newVal = currentDisplay + clickDigit ;
    }

    $display.text(newVal)
  })
})