$(document).ready(function(){

  var itemInputs = $(".iteminput");

  var resetStatus = function(){
    $(itemInputs[0]).val("").focus();
    $(itemInputs[1]).val("");
  };

  var addNumbers = function(x,y) {
    var num1 = Number(x);
    var num2 = Number(y);
    var sum = num1 + num2;
    $(".status-text").text(x+" plus "+y+" is "+sum);
    resetStatus();
  };
   
  var subtractNumbers = function(x,y) {
    var num1 = Number(x);
    var num2 = Number(y);
    var sum = num1 - num2;
    $(".status-text").text(x+" minus "+y+" is "+sum);
    resetStatus();
  };
   
  var printWarning = function(item){
        var my_text = $(itemInputs[item]).val();
        $(".status-text").text("Invalid entry: "+my_text+". Please enter an integer.");
        $(itemInputs[item]).val("").focus();
  };

  var validateNumbers = function(){
      $(".status-text").text("");
      var myResult = true;
      itemInputs.each(function(eachItem){
        var my_num = Number($(this).val());
        console.log(my_num);
        if (my_num === NaN) {
          printWarning(eachItem);
          myResult = false;
          return false;
        } else if ((my_num % 1 != 0) || (my_num < 1)) {
          printWarning(eachItem);
          myResult = false;
          return false;
        }
      });
      return myResult;
  };

  resetStatus();

  $(".add-button").click (function(){
    var isValid = validateNumbers();
    if (isValid === true) {
      addNumbers($(itemInputs[0]).val(),$(itemInputs[1]).val());
    }
  });

  $(".subtract-button").click (function(){
    var isValid = validateNumbers();
    if (isValid === true) {
      subtractNumbers($(itemInputs[0]).val(),$(itemInputs[1]).val());
    }
  });
  

});
