$(document).ready(function(){
  $(".well").click(function() {
    $(".front", this).slideToggle();
    $(".back", this).slideToggle();
  });
});
