$(document).ready(function() {
  $("div.button1").click(function() {
    $("div.field1").toggleClass("change1");
  });
  $(".button2").click(function() {
    $(".field2").toggleClass("change2");
  });
  $(".field1").click(function(){
  	$(this).toggleClass("change3");
  });
});