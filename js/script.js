$(document).ready(function(){

	$(window).scroll(function () { 

   $('.iconz').css({
      'top' : -($(this).scrollTop()/-9)+"px"
   }); 

});
}); 




