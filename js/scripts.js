//business logic

//constructor for bill (all due)
function Bill(sizes, totalPrice, orderName, toppingCost){
  this.sizes = ["sm", "md", "lg"];
  this.totalPrice = parseInt(10);
  this.orderName = "";
  this.toppingCost = 0
}

Bill.prototype.tabCost = function() {
  var totalDue = "";
  var orderName = "";
  //add price depending on size
  var sizeTotal = "";
  var sizeTotal = this.totalPrice;
  yourSize = $(".sizes").val();
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




//UI logic
$(function() {
  var yourSize = $(".sizes").val();

  var yourBill = new Bill(yourSize);

//get name for order
  $("#nameBtn").click(function(event) {
    event.preventDefault();
    orderName = $("#userName").val();
    $(".jumbotron").show();
    $(".greet").html(orderName);
  });
  $("#yourOrder").submit(function(event) {
    event.preventDefault();
    var yourSize = yourBill.size;
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
