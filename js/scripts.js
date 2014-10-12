$(document).ready(function() {
  $("#conversion").submit(function(event) {  
     var entry= $("input#testnumber").val();

     var testNumber = entry.replace(/[.?':!,"^;=+@%&()]/gi,"");  //to remove any grammar entered 
     
     var single = {0: "", 1:  "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10:  "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",};
     
     var tens = {0: "", 1: "", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};

     var teens = function(number) {
        if (testNumber.charAt(number) !== "1") {
          return tens[testNumber.charAt(number)] + " " + single[testNumber.charAt(parseInt(number) + 1)];}
        else {
          return single[10 + parseInt(testNumber.charAt((parseInt(number)) + 1))];} 
      };

    var hundreds = function(number) {
        if (testNumber.charAt(number) !== "0") {
          return single[testNumber.charAt(number)] + " " + "hundred" + " " + teens(parseInt(number) + 1);} 
        else {
          return teens(parseInt(number) + 1);
        }
      };

   var thousands = function(number) {//1,000,001
        if ( parseInt(testNumber.charAt(number)) === 0 && parseInt(testNumber.charAt(number + 1)) === 0 && parseInt(testNumber.charAt(number + 2)) === 0) {
          return "";} 
        else {
          return "thousand";
        }
      };

    var millions = function(number) {
      if (parseInt(testNumber.charAt(number)) === 0 && parseInt(testNumber.charAt(number + 1)) === 0 && parseInt(testNumber.charAt(number + 2)) === 0) {
          return "";} 
        else {
          return hundreds(number) + " " + "million";
        }
      };

    var billions = function(number) {
      if (parseInt(testNumber.charAt(number)) === 0 && parseInt(testNumber.charAt(number + 1)) === 0 && parseInt(testNumber.charAt(number + 2)) === 0) {
          return "";} 
        else {
          return hundreds(number) + " " + "billion";
        }
      };

  if (entry) {
    
     $("#answer").empty();

        if (parseInt(testNumber) >= 10000000000000) {//more than 10 trillion 
               var answer = "more than ten trillion";}

        else if (parseInt(testNumber) === 10000000000000) {//10 trillion 
               var answer = "ten trillion";}

        else if (parseInt(testNumber) >= 1000000000000) {//1 trillion 
               var answer = single[testNumber.charAt(0)] + " " + "trillion" + " " + billions(1) + " " + millions(4) + " " + hundreds(7) + " " + thousands(7) + " " + hundreds(10);}

        else if (parseInt(testNumber) >= 100000000000) {//100 billion 
               var answer = hundreds(0) + " " + "billion" + " " + millions(3) + " " + hundreds(6) + " " + thousands(6) + " " + hundreds(9);}

        else if (parseInt(testNumber) >= 10000000000) {//10 billion 
               var answer = teens(0) + " " + "billion" + " " + millions(2) + " " + hundreds(5) + " " + thousands(5) + " " + hundreds(8);}

         else if (parseInt(testNumber) >= 1000000000) {//1 billion 
               var answer = single[testNumber.charAt(0)] + " " + "billion" + " " + millions(1) + " " + hundreds(4) + " " + thousands(4) + " " + hundreds(7);}

         else if (parseInt(testNumber) >= 100000000) {//100 million 
               var answer = hundreds(0) + " " + "million" + " " + hundreds(3) + " " + thousands(3) + " " + hundreds(6);}
               //old: var answer = hundreds(0) + " " + "million" + " " + hundreds(3) + " " + "thousand" + " " + hundreds(6);}

         else if (parseInt(testNumber) >= 10000000) {//10 million 
               var answer = teens(0) + " " + "million" + " " + hundreds(2) + " " + thousands(2) + " " + hundreds(5);}
               //old: var answer = teens(0) + " " + "million" + " " + hundreds(2) + " " + "thousand" + " " + hundreds(5);}
         
         else if (parseInt(testNumber) >= 1000000) {//1 million 
               var answer = single[testNumber.charAt(0)] + " " + "million" + " " + hundreds(1) + " " + thousands(1) + " " + hundreds(4);}

         else if (parseInt(testNumber) >= 100000) {//100 thousand  
               var answer = hundreds(0) + " " + "thousand" + " " + hundreds(3);}
 
         else if (parseInt(testNumber) >= 10000) {//10 thousand 
               var answer = teens(0) + " " + "thousand" + " " + hundreds(2);}

         else if (parseInt(testNumber) >= 1000) {//1 thousand 
               var answer = single[testNumber.charAt(0)] + " " + "thousand" + " " + hundreds(1)}

         else if (parseInt(testNumber) >= 100) {//1 hundred
               var answer = hundreds(0);}

          else if (parseInt(testNumber) >= 20) {//twenty
               var answer = tens[testNumber.charAt(0)] + " " + single[testNumber.charAt(1)];}

          else if (parseInt(testNumber) >= 1){//1
            var answer = single[testNumber];}

          else {
            var answer = "zero";}
              
        $("#results").show();
             
        $("#answer").text(answer); 
         
     }
    event.preventDefault();   //required for any submit function
  });  
});
