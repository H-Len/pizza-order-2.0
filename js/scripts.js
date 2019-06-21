//business logic

function Pizza(sizes, toppings, totalPrice, orderName) {
  this.sizes = ["sm", "md", "lg"];
  this.toppings = ["fig", "olive", "onion"];
  this.totalPrice = parseInt(10);
  this.orderName = "";
}

//add price of size of pizza to total cost
Pizza.prototype.sizeCost = function() {
  var sizeTotal = this.totalPrice;
  sizeTotal += parseInt(yourSize);
  console.log(sizeTotal);
}

Pizza.prototype.onTop = function () {
  if (this.fig) {
    totalPrice += parseInt(1);
  }
  if (this.olive) {
    totalPrice += parseInt(1);
  }
  if (this.onion) {
    totalPrice += parseInt(1);
  }
}

var orderName = "";
var yourPizza = new Pizza(yourSize);
var yourSize = yourPizza.size;



//UI logic
$(function() {

  //get name for order
    $("#nameBtn").click(function() {
      orderName = $("#userName").val();
      console.log(orderName);
      $(".jumbotron").show();
    });

    $("#yourOrder").submit(function(event) {
      event.preventDefault();
      console.log("on top");


      // $(".sizes").click(function() {
      //   console.log("the options");
      //   //   event.preventDefault();
        yourSize = $(".sizes").val();
        console.log(yourSize);
        yourPizza.sizeCost();
        // var perSize = totalPrice.cost();
      //   console.log(perSize);
      //   var perTop = totalPrice.onTop();
      //   console.log(perTop);
      // })
      $(".grandOrder").show();
    })
});
