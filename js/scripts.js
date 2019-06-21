//business logic

function Pizza(dough, sizes, toppings, price, orderName) {
  this.dough = 10.00;
  this.sizes = ["sm", "md", "lg"];
  this.toppings = ["fig", "olive", "onion"];
  this.price = 0;
  this.orderName = "";
}

Pizza.prototype.cost = function() {
  var totalPrice = this.dough;
  if(this.sizes === "sm"){
    this.dough += 1;
  } else if(this.size === "md"){
    this.price = this.dough + 2;
  } else if(this.size === "lg"){
    this.price = this.dought + 3;
  }
  totalPrice = this.price;
  console.log(totalPrice);
}

Pizza.prototype.onTop = function () {
  this.fig = parseInt(1);
  this.olive = parseInt(1);
  this.onion = parseInt(1);
}

orderName = "";



//UI logic
$(function() {

  //get name for order
    $("#nameBtn").click(function() {
      orderName = $("#userName").val();
      console.log(orderName);
      $(".jumbotron").show();
    });

    $(".sizes").click(function() {
    //   event.preventDefault();
      yourSize = $(".sizes").val();
      console.log($(".sizes").val());
      var yourPizza = new Pizza(yourSize);
      console.log(yourPizza.cost());
      $(".grandOrder").show();
    });

});
