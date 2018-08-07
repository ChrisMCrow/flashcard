$(document).ready(function(){
  $(".well").click(function() {
    $(".front", this).toggle();
    $(".back", this).toggle();
  });

});
