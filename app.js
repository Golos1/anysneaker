
$(document).ready(function(){
    $(".panel").click(function() {
        $(".panel").removeClass('active');
        $(this).addClass('active');
    })
  $(".btn").click(function() {
      $(".search").toggleClass('active');
      if($(".search").hasClass('active')){
        $(".input").attr("placeholder","Search");
        $(".input").focus();
      }
      else{
        $(".input").attr("placeholder","");
      }
  });
    })