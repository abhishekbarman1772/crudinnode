function changedata(){
     order_id=document.getElementById("order_id").value;
     item=document.getElementById("item").value;
     date=document.getElementById("date").value;
     quantity=document.getElementById("quantity").value;
     phoneno=document.getElementById("phone").value;
   
    jQuery.ajax({
     url:`/update/${order_id}?item=${item}&date_of_order=${date}&quantity=${quantity}&Phone=${phoneno}` ,
     type: "PUT",
     dataType: "json",
     beforeSend: function(x) {
       if (x && x.overrideMimeType) {
         x.overrideMimeType("application/j-son;charset=UTF-8");
       }
     },
     success: function(result) {
   //Write your code here
   console.log(result)
     }  
});  
   // document.location.reload();


   
   }  
