function calculatetotal() {
            var customerName = document.getElementById("customerName").value;
            var checkInDate = document.getElementById("checkInDate").value;
            var totalnoofdays = parseInt(document.getElementById("totalnoofdays").value);
            var totalnoofpersons = parseInt(document.getElementById("totalnoofpersons").value);
            var roomtype = document.getElementById("roomtype").value;
            var amentities= document.getElementById("amentities").value;
            var advAmount = parseInt(document.getElementById("advAmount").value);

    if(roomtype ==="Delux Room")
    {
      roomRate=2500;
    }
    else{
      roomRate=4000; 
    }
    const totalRoomCost = roomRate * totalnoofdays;
    if(amentities==="ac")
    {
      amenitiesCost=1000;
    }
    else{
      amenitiesCost=300;
    }
    
    const totalamenitiescost = amenitiesCost * totalnoofdays;
    if(totalnoofpersons>2)
    {
      extrapersonscost=(totalnoofpersons - 2) * 1000 * totalnoofdays ;
    }
    else{
      extrapersonscost=0;
    }
    const totalCost = totalRoomCost + totalamenitiescost + extrapersonscost;

    const balanceamount = totalCost - advAmount;

    document.getElementById("totalRoomCost").textContent = totalRoomCost;
    document.getElementById("totalamenitiescost").textContent = totalamenitiescost;
    document.getElementById("totalCost").textContent = totalCost;
    document.getElementById("extrapersonscost").textContent = extrapersonscost;
    document.getElementById("balanceamount").textContent = balanceamount;
}
