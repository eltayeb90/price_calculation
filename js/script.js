
var allProducts = document.querySelectorAll(".products .card .card-body .btn")

var div = document.querySelector("#carditems")

var btn = document.querySelector("#btn1")

var totalPR = document.querySelector("#total")

 var totalPrice = 0


 allProducts.forEach(function (item){
    item.onclick = function () {

        totalPrice += +(item.getAttribute("price"))
        
        div.innerHTML += item.title + " / "
 
        if (div.innerHTML != "" ){
            btn.style.display = "block"
            div.style.display = "block"
            totalPR.style.background = "yellow"

        }

    }
 })


 btn.onclick = function () {
    document.getElementById("total").innerHTML="total: "+totalPrice + " /SR"
 }


  
  
  





