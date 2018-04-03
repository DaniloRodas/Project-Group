$(document).ready(function () {

  $("#btn-Register").click(function(){
      $(".formLogin").hide();
      $(".formRegister").show();
  });
  $("#btn-back").click(function(){
      $(".formLogin").show();
      $(".formRegister").hide();
  });
});
