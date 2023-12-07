

function storefn()
{   
   
    cars={
        carbrand:brand.value,
    carprice:price.value,
    carkey:key.value    }
    if(cars.carkey  in localStorage)
    {
        alert("Car details already present")
    }
    else{
    localStorage.setItem(cars.carkey,JSON.stringify(cars))
    alert("Item added successfully")    
}
}

function retfn()
{
    if(retkey.value in localStorage)
    {   
        var obj=JSON.parse(localStorage.getItem(retkey.value))
        result.innerHTML=`<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">Employee Details</h5>
          
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Car Key:${obj.carkey}</li>
        <li class="list-group-item">Brand:${obj.carbrand}</li>
        <li class="list-group-item">Price:${obj.carprice}</li>

          
        </ul>
        
      </div>`
    

    }
    else{
        alert("Cars details not found")
    }
}

function remfn()
{
    if(remkey.value in localStorage)
    {
        localStorage.removeItem(remkey.value)
        alert("Item Deleted")

    }
    else
    {
        alert("Car details not found")
    }
}

function clearfn()
{
    localStorage.clear()
    alert("Records Deleted Successfully")
}