  $(document).ready(function() {
 //   $("form#convert").submit(function(event) {
 //    event.preventDefault();
 //   var name = document.getElementById("cups-to-quarts");
 // alert("this is cupts to quarts")
 // $("#output").text(cups-to-quarts);
 // });
 // });
 /* When the input field receives input, convert the value from feet to meters */
 /* When the input field receives input, convert the value from feet to meters */
 function cupConverter(valNum) {
   document.getElementById("outputQuarts").innerHTML=valNum/4;
 }
 function quartConverter(valNum) {
     document.getElementById("outputCups").innerHTML=valNum*4;
     }
