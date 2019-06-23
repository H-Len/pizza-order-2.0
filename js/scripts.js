//business logic
//
// function Pizza(sizes, toppings, totalPrice, orderName) {
//   this.sizes = ["sm", "md", "lg"];
//   // this.toppings = ["fig", "olive", "onion"];
//   this.totalPrice = parseInt(10);
//   this.orderName = "";
// }

//add price of size of pizza to total cost
// Pizza.prototype.sizeCost = function() {
//   var sizeTotal = this.totalPrice;
//   sizeTotal += parseInt(yourSize);
//   console.log(sizeTotal);
//   return sizeTotal;
// }

//constructor for bill (all due)
function Bill(sizes, totalPrice, orderName, toppingCost, tab){
  this.sizes = ["sm", "md", "lg"];
  // this.toppings = ["fig", "olive", "onion"];
  this.totalPrice = parseInt(10);
  this.orderName = "";
  // this.doughCost = 10,
  // this.sizeCost = sizeCost,
  this.toppingCost = 0,
  this.tab = tab
}

Bill.prototype.tabCost = function() {
  var sizeTotal = this.totalPrice;
  sizeTotal += parseInt(yourSize);
  console.log(sizeTotal);
//   return sizeTotal;
// }
//
// //add all toppings that are checked by user
// Bill.prototype.onTop = function () {
  var toppingTotal = this.toppingCost;
  if(document.getElementById("fig").checked) {
    toppingTotal ++;
  }
  if(document.getElementById("olive").checked) {
    toppingTotal++;
  }
  if(document.getElementById("onion").checked) {
    toppingTotal++;
  }
    console.log(toppingTotal);
//};

//REFACTOR
// Bill.prototype.sumCost = function(tab) {

  this.tab = sizeTotal + toppingTotal;
  console.log(this.tab);
};

var orderName = "";
var yourBill = new Bill(yourSize);
var yourSize = yourBill.size;
// var yourBill = new Bill()
// var sizeP = "";
var sizeTotal = "";
var totalDue;
var tab;
// var perTop = "";
// var totalDue = yourSize + perTop;





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
      $(".sizeVal").text(yourSize);
      // $(".topper").val();

      totalDue = $(yourBill.tabCost());
      // console.log(sizeP);
      // perTop = $(yourBill.onTop());
      // tab = yourPizza.sumCost;
      // console.log(tab);
      $(".grandOrder").show(function() {
        setInterval(function() {
          window.scrollTo(0,document.body.scrollHeight);
        });
        // // $("#totalCost").text(yourBill.sumCost());    //it says "sizeTotal" is returned as [object Object], but it's returned from .sizeCost() and other steps are taken to set it

      })
    })

      $(".refresh").show()
      $(".refresh").click(function() {
        window.location.reload();
      });
});
