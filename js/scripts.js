//business logic

function Pizza(sizes, toppings, totalPrice, orderName) {
  this.sizes = ["sm", "md", "lg"];
  // this.toppings = ["fig", "olive", "onion"];
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

// //this currently adds all everytime since all are always options
// Pizza.prototype.onTop = function () {
//   var toppingTotal = this.totalPrice;
//   if("#fig") {
//     toppingTotal ++;
//   }
//   if("#olive") {
//     toppingTotal++;
//   }
//   if("#onion") {
//     toppingTotal++;
//   }
//     console.log(toppingTotal);
// };


//constructor for bill (all due)
function Bill(/* doughCost, sizeCost,*/ toppingCost, tab){
  // this.doughCost = 10,
  // this.sizeCost = sizeCost,
  this.toppingCost = 0,
  this.tab = tab
}

//this currently adds all everytime since all are always options
Bill.prototype.onTop = function () {
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
};

//REFACTOR
// Bill.prototype.sumCost = function(sizeCost, toppingTotal) {
//   this.tab = sizeCost + toppingTotal;
//   console.log(this.tab);
}

var orderName = "";
var yourPizza = new Pizza(yourSize);
var yourSize = yourPizza.size;
var yourBill = new Bill()
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
      $(".topper").val();

      totalDue = $(yourPizza.sizeCost());
      console.log(sizeP);
      perTop = $(yourBill.onTop());
      console.log(perTop);

    // })

      $(".grandOrder").show(function() {
        setInterval(function() {
          window.scrollTo(0,document.body.scrollHeight);
        });
        $("#totalCost").text(tab.sumCost);    //it says "sizeTotal" is returned as [object Object], but it's returned from .sizeCost() and other steps are taken to set it
        $(".refresh").show()
        $(".refresh").click(function() {
          window.location.reload();
        });
      });



    });

});
