function up () {
        order_id=document.getElementById("iddel").value;
     
        fetch(`/deleteorder/${order_id}`, {
        method: 'DELETE',
      }) 
      .then(res => res.text()) 
       .then(res => console.log(res))
    }    
