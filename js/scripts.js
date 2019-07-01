//business logic

//constructor for bill (all due)
function Bill(sizes, totalPrice, orderName, toppingCost, tab){
  this.sizes = ["sm", "md", "lg"];
  // this.toppings = ["fig", "olive", "onion"];
  this.totalPrice = parseInt(10);
  this.orderName = "";

  this.toppingCost = 0,
  this.tab = tab
}

Bill.prototype.tabCost = function() {
  var totalDue = "";
  var orderName = "";
  //add price depending on size
  var sizeTotal = this.totalPrice;
  sizeTotal += parseInt(yourSize);

  //add all toppings that are checked by user
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

  //calculate total due
  this.tab = sizeTotal + toppingTotal;
  totalDue = this.tab;
  return totalDue;
};



var yourBill = new Bill(yourSize);
var yourSize = yourBill.size;
var sizeTotal = "";
var tabCost;





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

    totalDue = $(yourBill.tabCost());
    $(".grandOrder").show(function(totalDue) {
      setInterval(function() {
        window.scrollTo(0,document.body.scrollHeight);
      });

      //display total at bottom of page
      $("#totalCost").text(yourBill.tabCost());
    })
    $(".refresh").show()
  })

  $(".refresh").click(function() {
    window.location.reload();
  });
});
