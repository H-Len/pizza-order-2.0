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
  return sizeTotal;
}

//this currently adds all everytime since all are always options
Pizza.prototype.onTop = function () {
  var toppingTotal = this.totalPrice;
  if("#fig") {
    toppingTotal ++;
  }
  if("#olive") {
    toppingTotal++;
  }
  if("#onion") {
    toppingTotal++;
  }
    console.log(toppingTotal);
};



var orderName = "";
var yourPizza = new Pizza(yourSize);
var yourSize = yourPizza.size;
var sizeP = "";
var sizeTotal = "";
var totalDue;
// var perTop = "";
// var totalDue = yourSize + perTop;
// console.log(totalDue);

//UI logic
$(function() {

  //get name for order
    $("#nameBtn").click(function(event) {
      event.preventDefault();
      orderName = $("#userName").val();
      $(".jumbotron").show();
      $(".greet").html(orderName);
    });

    $("#yourOrder").submit(function(event) {
      event.preventDefault();
      yourSize = $(".sizes").val();
      totalDue = $(yourPizza.sizeCost());
      console.log(sizeP);
      // $(".topper").val();
      perTop = $(yourPizza.onTop());
      console.log(perTop);
    // })
      $(".grandOrder").show(function() {
        setInterval(function() {
          window.scrollTo(0,document.body.scrollHeight);
        });
        $("#totalCost").text(totalDue);    //it says "sizeTotal" is returned as [object Object], but it's returned from .sizeCost() and other steps are taken to set it
        $(".refresh").show()
        $(".refresh").click(function() {
          window.location.reload();
        });
      });



    });

});
