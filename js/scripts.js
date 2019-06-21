//business logic

function Pizza(dough, size) {
  this.dough = 10.00;
  this.size = [sm, md, lg];
  this.price = 0;
  this.orderName = "";
}

Pizza.prototype.cost = function() {
  if(this.size === sm){
    this.price = this.dough + 1;
  } else if(this.size === md){
    this.price = this.dough + 2;
  } else if(this.size === lg){
    this.price = this.dought + 3;
  }
}

function Topping(fig, olive, onion) {
  this.fig = fig;
  this.olive = olive;
  this.onion = onion;
}

Topping.prototype.cost = function() {
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
    });
});
